import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import ingredient from "./burger-ingredients.module.css";
import BurgerIngredientItem from "../burger-ingredient-item/burger-ingredient-item";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import { useDispatch, useSelector } from "react-redux";
import { getModalState } from "../../services/reducers/modal";
import { getIngredientsState } from "../../services/reducers/burger-ingredients";
import { loadIngredients } from "../../services/actions/burger-ingredients";
import { INGREDIENT_MODAL, openIngredientModal } from "../../services/actions/modal";


const BurgerIngredients = () => {
  const dispatch = useDispatch();

    const { ingredients }  = useSelector(getIngredientsState)
    const { modalType } = useSelector(getModalState)

    const [ scrollPosition, setScrollPosition ] = React.useState(0);

    React.useEffect(() => {
        dispatch(loadIngredients());
    }, [])

    const bunTab = "buns";
    const mainTab = "main";
    const sauceTab = "sauce";

    const [activeTab, setActiveTab] = React.useState(bunTab);

    React.useEffect(() => {
        const scrollWrapper = document.querySelector(".custom-scroll");
        scrollWrapper.addEventListener("scroll", handleScroll, { passive: true });
    
        return () => {
            scrollWrapper.removeEventListener("scroll", handleScroll);
        };
    }, [scrollPosition]);
    
    const handleScroll = () => {
        // Создание объекта типа "вкладка": "расстояние до верха"
        const tabsDistance = {
            [bunTab]: getDistance(`.${bunTab}`),
            [sauceTab]: getDistance(`.${sauceTab}`),
            [mainTab]: getDistance(`.${mainTab}`),
        }

        // Сортировка
        const sortedTabs = Object.keys(tabsDistance).sort((a, b) => {
            return tabsDistance[a] - tabsDistance[b]
        }) 
        setActiveTab(sortedTabs[0])
    };

    const getDistance = (className) => {
        // Модуль расстояния от блока до вкладок
        return Math.abs(document.querySelector(className).getBoundingClientRect().top - 281);
    }

  return (
    <section className={ingredient.section}>
      <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>
      <div className={`${ingredient.nav} mb-10`}>
        <Tab value='one' active={activeTab === bunTab} onClick={setActiveTab}>
          Булки
        </Tab>
        <Tab value='two' active={activeTab === sauceTab} onClick={setActiveTab}>
          Соусы
        </Tab>
        <Tab value='three' active={activeTab === mainTab} onClick={setActiveTab}>
          Начинки
        </Tab>
      </div>
      <div className={`${ingredient.scroll} custom-scroll`}>
        <div className={`ingredient.point ${bunTab}`}>
          <h2 className="text text_type_main-medium">Булки</h2>
          <ul className={`${ingredient.ingredient} mb-2 ml-4 mr-2 mt-0`}>
            {
              ingredients.filter(ingredient => ingredient.type === "bun").map((ingredient) => (
                <li key={ingredient._id} className={`${ingredient.item} mt-6 mb-2`}>
                  <BurgerIngredientItem ingredient={ingredient} openIngredientDetails={() => dispatch(openIngredientModal(ingredient))}/>
                </li>
              ))
            }
          </ul>
        </div>
        <div className={`ingredient.point ${sauceTab}`}>
          <h2 className="text text_type_main-medium">Соусы</h2>
          <ul className={`${ingredient.ingredient} mb-2 ml-4 mr-2 mt-0`}>
            {
              ingredients.filter(ingredient => ingredient.type === "sauce").map((ingredient) => (
                <li key={ingredient._id} className={`${ingredient.item} mt-6 mb-2`}>
                  <BurgerIngredientItem ingredient={ingredient} openIngredientDetails={() => dispatch(openIngredientModal(ingredient))}/>
                </li>
              ))
            }
          </ul>
        </div>
        <div className={`ingredient.point ${mainTab}`}>
          <h2 className="text text_type_main-medium">Начинки</h2>
          <ul className={`${ingredient.ingredient} mb-2 ml-4 mr-2 mt-0`}>
            {
              ingredients.filter(ingredient => ingredient.type === "main").map((ingredient) => (
                <li key={ingredient._id} className={`${ingredient.item} mt-6 mb-2`}>
                  <BurgerIngredientItem ingredient={ingredient} openIngredientDetails={() => dispatch(openIngredientModal(ingredient))}/>
                </li>
              ))
            }
          </ul>
        </div>
      </div>      
    </section>
  );
};

export default BurgerIngredients;
