import styles from "./ingredient-details.module.css";
import { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import { getIngredientsState } from "../../services/ingredients/reducer";
import { useAppSelector } from "../../hooks/hooks";
import { TIngedient } from "../../types/ingredient";

const text = {
  calories: "Калории,ккал",
  proteins: "Белки, г",
  fat: "Жиры, г",
  carbohydrates: "Углеводы, г",
};

export const IngredientDetails = () => {
  const { ingredients } = useAppSelector(getIngredientsState);

  const location = useLocation();
  let background = location.state && location.state.background;

  const [ingredient, setIngredient] = useState<TIngedient>();

  useEffect(() => {
    if (ingredients.length !== 0) {
      background = location.state && location.state.background;
      const ingredientId = location.pathname.split('/')[2]; // получаем id ингредиента из url
      const currentIngredient = ingredients.find(ingredient => ingredient._id === ingredientId); // находим по id
      if(typeof currentIngredient !== undefined) {
        setIngredient(currentIngredient);
      }
    }
  }, [location, ingredients]);

  return (
    <div className={background ? styles.modal : styles.main}>
      <h2 className={`${background ? 'pl-10' : ''}  text text_type_main-large`}>
        Детали ингредиента
      </h2>
      <div className={`${styles.info} pb-15`}>
        <img className={styles.image} src={ingredient?.image_large} alt="" />
        <p className={`${styles.name} text text_type_main-medium mt-4 mb-8`}>{ingredient?.name}</p>
        <ul className={`${styles.nutrition}`}>
          <li className={`${styles.item}`}>
            <p className={`${styles.nutrition__point} text text_type_main-default`}>{text.calories}</p>
            <p className={`${styles.nutrition__value} text text_type_digits-default`}>{ingredient?.calories}</p>
          </li>
          <li className={`${styles.item}`}>
            <p className={`${styles.nutrition__point} text text_type_main-default`}>{text.proteins}</p>
            <p className={`${styles.nutrition__value} text text_type_digits-default`}>{ingredient?.proteins}</p>
          </li>
          <li className={`${styles.item}`}>
            <p className={`${styles.nutrition__point} text text_type_main-default`}>{text.fat}</p>
            <p className={`${styles.nutrition__value} text text_type_digits-default`}>{ingredient?.fat}</p>
          </li>
          <li className={`${styles.item}`}>
            <p className={`${styles.nutrition__point} text text_type_main-default`}>{text.carbohydrates}</p>
            <p className={`${styles.nutrition__value} text text_type_digits-default`}>{ingredient?.carbohydrates}</p>
          </li>
        </ul>
      </div>
    </div>
  )
}