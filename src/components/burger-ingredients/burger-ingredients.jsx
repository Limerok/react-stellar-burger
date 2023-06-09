import React, { useMemo } from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';
import ingredient from "./burger-ingredients.module.css";
import BurgerIngredientItem from "../burger-ingredient-item/burger-ingredient-item";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import { ConstructorContext } from "../../services/ingredients-context";
import { ingredientPropType } from '../../utils/prop-types';
import { bunType, sauceType, fillingType } from "../../utils/constant";


const BurgerIngredients = ({ingredients}) => {
  const { constructorState, constructorDispatcher } = React.useContext(ConstructorContext);

  const [current, setCurrent] = React.useState(bunType);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [currentIngredient, setCurrentIngredient] = React.useState(null);

  const modalTitle = 'Детали ингредиента';


  const filteredBunIngridient = useMemo(() => ingredients.filter(element => element.type === bunType),[ingredients, bunType]);
  const filteredSauseIngridient = useMemo(() => ingredients.filter(element => element.type === sauceType), [ingredients, sauceType]);
  const filteredfillingIngridient = useMemo(() => ingredients.filter(element => element.type === fillingType), [ingredients, fillingType]);

  const handleOpenModalIngredient = (item) => {
    setModalOpen(true);
    setCurrentIngredient(item);
    constructorDispatcher({
      type: "add",
      ingredient: item
  });
    
  };

  const handleCloseModalIngredient = () => {
    setModalOpen(false);
    setCurrentIngredient(null);
  };

  const setTab = (tab) => {
    setCurrent(tab);

    const element = document.getElementById(tab);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={ingredient.section}>
      <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>
      <div style={{ display: "flex" }} className="mb-10">
        <Tab value={bunType} active={current === {bunType}} onClick={()=> {setTab(bunType)}}>
          Булки
        </Tab>
        <Tab value={sauceType} active={current === {sauceType}} onClick={()=> {setTab(sauceType)}}>
          Соусы
        </Tab>
        <Tab value={fillingType} active={current === {fillingType}} onClick={()=> {setTab(fillingType)}}>
          Начинки
        </Tab>
      </div>
      <div className={`${ingredient.scroll} custom-scroll`}>
        <div className={ingredient.point} id={bunType}>
          <h2 className="text text_type_main-medium">Булки</h2>
          <ul className={`${ingredient.ingredient} mb-2 ml-4 mr-2 mt-0`}>
            {filteredBunIngridient.map(item => (
              <li key={item._id} className={`${ingredient.item} mt-6 mb-2`}>
                <BurgerIngredientItem ingredient={item} openIngredient={handleOpenModalIngredient}/>
              </li>
            ))}
          </ul>
        </div>
        <div className={ingredient.point} id={sauceType}>
          <h2 className="text text_type_main-medium">Соусы</h2>
          <ul className={`${ingredient.ingredient} mb-2 ml-4 mr-2 mt-0`}>
            {filteredSauseIngridient.map(item => (
              <li key={item._id} className={`${ingredient.item} mt-6 mb-2`}>
                <BurgerIngredientItem ingredient={item} openIngredient={handleOpenModalIngredient}/>
              </li>
            ))}
          </ul>
        </div>
        <div className={ingredient.point} id={fillingType}>
          <h2 className="text text_type_main-medium">Начинки</h2>
          <ul className={`${ingredient.ingredient} mb-2 ml-4 mr-2 mt-0`}>
            {filteredfillingIngridient.map(item => (
              <li key={item._id} className={`${ingredient.item} mt-6 mb-2`}>
                <BurgerIngredientItem ingredient={item} openIngredient={handleOpenModalIngredient}/>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {modalOpen && (
        <Modal closeModal={handleCloseModalIngredient} title={modalTitle}>
          <IngredientDetails ingredientInfo={currentIngredient}/>
        </Modal>
      )}
      
    </section>
  );
};

BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropType.isRequired).isRequired,
}

export default React.memo(BurgerIngredients);
