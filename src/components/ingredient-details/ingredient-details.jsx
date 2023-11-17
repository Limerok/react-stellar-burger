import styles from "./ingredient-details.module.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import { getModalState } from "../../services/modal/reducer";
import { useLocation } from "react-router-dom";
import { getIngredients } from "../../utils/api";
import { getIngredientsState } from "../../services/ingredients/reducer";

const text = {
  calories: "Калории,ккал",
  proteins: "Белки, г",
  fat: "Жиры, г",
  carbohydrates: "Углеводы, г",
};

export const IngredientDetails = () => {
  const { ingredients } = useSelector(getIngredientsState);

  const location = useLocation();
  let background = location.state && location.state.background;

  const [ingredient, setIngredient] = useState({});

  useEffect(() => {
    if (ingredients.length !== 0) {
      background = location.state && location.state.background;
      const ingredientId = location.pathname.split('/')[2]; // получаем id ингредиента из url
      const currentIngredient = ingredients.find(ingredient => ingredient._id === ingredientId); // находим по id
      setIngredient(currentIngredient);
    }
  }, [location, ingredients]);

  return (
    <div className={background ? styles.modal : styles.main}>
      <h2 className={`${background ? 'pl-10' : ''}  text text_type_main-large`}>
        Детали ингредиента
      </h2>
      <div className={`${styles.info} pb-15`}>
        <img className={styles.image} src={ingredient.image_large} alt="" />
        <p className={`${styles.name} text text_type_main-medium mt-4 mb-8`}>{ingredient.name}</p>
        <ul className={`${styles.nutrition}`}>
          <li className={`${styles.item}`}>
            <p className={`${styles.nutrition__point} text text_type_main-default`}>{text.calories}</p>
            <p className={`${styles.nutrition__value} text text_type_digits-default`}>{ingredient.calories}</p>
          </li>
          <li className={`${styles.item}`}>
            <p className={`${styles.nutrition__point} text text_type_main-default`}>{text.proteins}</p>
            <p className={`${styles.nutrition__value} text text_type_digits-default`}>{ingredient.proteins}</p>
          </li>
          <li className={`${styles.item}`}>
            <p className={`${styles.nutrition__point} text text_type_main-default`}>{text.fat}</p>
            <p className={`${styles.nutrition__value} text text_type_digits-default`}>{ingredient.fat}</p>
          </li>
          <li className={`${styles.item}`}>
            <p className={`${styles.nutrition__point} text text_type_main-default`}>{text.carbohydrates}</p>
            <p className={`${styles.nutrition__value} text text_type_digits-default`}>{ingredient.carbohydrates}</p>
          </li>
        </ul>
      </div>
    </div>
  )
}