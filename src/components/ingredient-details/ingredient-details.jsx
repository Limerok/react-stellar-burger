import style from "./ingredient-details.module.css";
import { useSelector } from "react-redux";
import { getModalState } from "../../services/reducers/modal";

const text = {
  calories: "Калории,ккал",
  proteins: "Белки, г",
  fat: "Жиры, г",
  carbohydrates: "Углеводы, г",
};

const IngredientDetails= () => {
  const { modalProps } = useSelector(getModalState);
  const ingredient = modalProps;

  return (
    <div className={`${style.info} pb-15`}>
      <img className={style.image} src={ingredient.image_large} alt="" />
      <p className={`${style.name} text text_type_main-medium mt-4 mb-8`}>{ingredient.name}</p>
      <ul className={`${style.nutrition}`}>
        <li className={`${style.item}`}>
          <p className={`${style.nutrition__point} text text_type_main-default`}>{text.calories}</p>
          <p className={`${style.nutrition__value} text text_type_digits-default`}>{ingredient.calories}</p>
        </li>
        <li className={`${style.item}`}>
          <p className={`${style.nutrition__point} text text_type_main-default`}>{text.proteins}</p>
          <p className={`${style.nutrition__value} text text_type_digits-default`}>{ingredient.proteins}</p>
        </li>
        <li className={`${style.item}`}>
          <p className={`${style.nutrition__point} text text_type_main-default`}>{text.fat}</p>
          <p className={`${style.nutrition__value} text text_type_digits-default`}>{ingredient.fat}</p>
        </li>
        <li className={`${style.item}`}>
          <p className={`${style.nutrition__point} text text_type_main-default`}>{text.carbohydrates}</p>
          <p className={`${style.nutrition__value} text text_type_digits-default`}>{ingredient.carbohydrates}</p>
        </li>
      </ul>
    </div>
  )
}


export default IngredientDetails;