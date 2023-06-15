import React from "react";
import style from "./ingredient-details.module.css";
import { ingredientPropType } from '../../utils/prop-types';

const text = {
  calories: "Калории,ккал",
  proteins: "Белки, г",
  fat: "Жиры, г",
  carbohydrates: "Углеводы, г",
};

const IngredientDetails= ({ingredientInfo}) => {
  return (
    <div className={`${style.info} pb-15`}>
      <img className={style.image} src={ingredientInfo.image_large} alt="" />
      <p className={`${style.name} text text_type_main-medium mt-4 mb-8`}>{ingredientInfo.name}</p>
      <ul className={`${style.nutrition}`}>
        <li className={`${style.item}`}>
          <p className={`${style.nutrition__point} text text_type_main-default`}>{text.calories}</p>
          <p className={`${style.nutrition__value} text text_type_digits-default`}>{ingredientInfo.calories}</p>
        </li>
        <li className={`${style.item}`}>
          <p className={`${style.nutrition__point} text text_type_main-default`}>{text.proteins}</p>
          <p className={`${style.nutrition__value} text text_type_digits-default`}>{ingredientInfo.proteins}</p>
        </li>
        <li className={`${style.item}`}>
          <p className={`${style.nutrition__point} text text_type_main-default`}>{text.fat}</p>
          <p className={`${style.nutrition__value} text text_type_digits-default`}>{ingredientInfo.fat}</p>
        </li>
        <li className={`${style.item}`}>
          <p className={`${style.nutrition__point} text text_type_main-default`}>{text.carbohydrates}</p>
          <p className={`${style.nutrition__value} text text_type_digits-default`}>{ingredientInfo.carbohydrates}</p>
        </li>
      </ul>
    </div>
  )
}

IngredientDetails.propTypes = {
  ingredientInfo: ingredientPropType.isRequired,
};

export default React.memo(IngredientDetails);