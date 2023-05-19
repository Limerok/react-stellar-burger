import React, { useMemo } from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import ingredient from "./burger-ingredients.module.css";
import BurgerIngredientItem from "../burger-ingredient-item/burger-ingredient-item";
import PropTypes from 'prop-types';
import { ingredientPropType } from '../../utils/prop-types';

const bunType = 'bun';
const sauceType = 'sauce';
const fillingType = 'main';

const BurgerIngredients = ({ ingredients }) => {
  
  const [current, setCurrent] = React.useState("bun");

  const filteredBunIngridient = useMemo(() => ingredients.filter(element => element.type === bunType),[ingredients, bunType]);
  const filteredSauseIngridient = useMemo(() => ingredients.filter(element => element.type === sauceType), [ingredients, sauceType]);
  const filteredfillingIngridient = useMemo(() => ingredients.filter(element => element.type === fillingType), [ingredients, fillingType]);

  return (
    <section className={ingredient.section}>
      <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>
      <div style={{ display: "flex" }} className="mb-10">
        <Tab value="bun" active={current === "bun"} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="sauce" active={current === "sauce"} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="filling" active={current === "filling"} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
      <div className={`${ingredient.scroll} custom-scroll`}>
        <div className={ingredient.point}>
          <h2 className="text text_type_main-medium">Булки</h2>
          <ul className={`${ingredient.ingredient} mb-2 ml-4 mr-2 mt-0`}>
            {filteredBunIngridient.map(item => (
              <li key={item._id} className={`${ingredient.item} mt-6 mb-2`}>
                <BurgerIngredientItem ingredient={item} />
              </li>
            ))}
          </ul>
        </div>
        <div className={ingredient.point}>
          <h2 className="text text_type_main-medium">Соусы</h2>
          <ul className={`${ingredient.ingredient} mb-2 ml-4 mr-2 mt-0`}>
            {filteredSauseIngridient.map(item => (
              <li key={item._id} className={`${ingredient.item} mt-6 mb-2`}>
                <BurgerIngredientItem ingredient={item} />
              </li>
            ))}
          </ul>
        </div>
        <div className={ingredient.point}>
          <h2 className="text text_type_main-medium">Начинки</h2>
          <ul className={`${ingredient.ingredient} mb-2 ml-4 mr-2 mt-0`}>
            {filteredfillingIngridient.map(item => (
              <li key={item._id} className={`${ingredient.item} mt-6 mb-2`}>
                <BurgerIngredientItem ingredient={item} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropType.isRequired).isRequired,
};

export default BurgerIngredients;
