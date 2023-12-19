import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-ingredients.module.css";
import { BurgerIngredientItem } from "../burger-ingredient-item/burger-ingredient-item";
import { useAppSelector } from "../../hooks/hooks";
import { getIngredientsState } from "../../services/ingredients/slice";

export const BurgerIngredients = () => {

  const { ingredients } = useAppSelector(getIngredientsState);

  const [ scrollPosition, setScrollPosition ] = React.useState<number>(0);

  const bunTab = "buns";
  const mainTab = "main";
  const sauceTab = "sauce";

  const [activeTab, setActiveTab] = React.useState<string>(bunTab);

  React.useEffect(() => {
    const scrollWrapper = document.querySelector('.custom-scroll');
    (scrollWrapper as Element).addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      (scrollWrapper as Element).removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);

  const handleScroll = () => {
    // Создание объекта типа 'вкладка': 'расстояние до верха'
    const tabsDistance: {[name: string]: number} = {
      [bunTab]: getDistance(`.${bunTab}`),
      [sauceTab]: getDistance(`.${sauceTab}`),
      [mainTab]: getDistance(`.${mainTab}`),
    };

    // Сортировка
    const sortedTabs = Object.keys(tabsDistance).sort((a, b) => {
      return tabsDistance[a] - tabsDistance[b];
    });
    setActiveTab(sortedTabs[0]);
  };

  const getDistance = (className: string) => {
    // Модуль расстояния от блока до вкладок
    return Math.abs((document.querySelector(className) as Element).getBoundingClientRect().top - 281);
  };

  return (
    <section className={styles.section}>
      <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>
      <div className={`${styles.nav} mb-10`}>
        <Tab value="one" active={activeTab === bunTab} onClick={setActiveTab}>
          Булки
        </Tab>
        <Tab value="two" active={activeTab === sauceTab} onClick={setActiveTab}>
          Соусы
        </Tab>
        <Tab
          value="three"
          active={activeTab === mainTab}
          onClick={setActiveTab}
        >
          Начинки
        </Tab>
      </div>
      <div className={`${styles.scroll} custom-scroll`}>
        <div className={`ingredient.point ${bunTab}`}>
          <h2 className="text text_type_main-medium">Булки</h2>
          <ul className={`${styles.ingredient} mb-2 ml-4 mr-2 mt-0`}>
            {ingredients
              .filter((ingredient) => ingredient.type === "bun")
              .map((ingredient) => (
                <li
                  key={ingredient._id}
                  className={`${styles.item} mt-6 mb-2`}
                >
                  <BurgerIngredientItem
                    ingredient={ingredient}
                  />
                </li>
              ))}
          </ul>
        </div>
        <div className={`ingredient.point ${sauceTab}`}>
          <h2 className="text text_type_main-medium">Соусы</h2>
          <ul className={`${styles.ingredient} mb-2 ml-4 mr-2 mt-0`}>
            {ingredients
              .filter((ingredient) => ingredient.type === "sauce")
              .map((ingredient) => (
                <li
                  key={ingredient._id}
                  className={`${styles.item} mt-6 mb-2`}
                >
                  <BurgerIngredientItem
                    ingredient={ingredient}
                  />
                </li>
              ))}
          </ul>
        </div>
        <div className={`ingredient.point ${mainTab}`}>
          <h2 className="text text_type_main-medium">Начинки</h2>
          <ul className={`${styles.ingredient} mb-2 ml-4 mr-2 mt-0`}>
            {ingredients
              .filter((ingredient) => ingredient.type === "main")
              .map((ingredient) => (
                <li
                  key={ingredient._id}
                  className={`${styles.item} mt-6 mb-2`}
                >
                  <BurgerIngredientItem
                    ingredient={ingredient}
                  />
                </li>
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BurgerIngredients;
