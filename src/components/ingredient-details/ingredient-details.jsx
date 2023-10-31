import style from "./ingredient-details.module.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import { getModalState } from "../../services/reducers/modal";
import { useLocation } from "react-router-dom";
import { getIngredients } from "../../utils/api";

const text = {
  calories: "Калории,ккал",
  proteins: "Белки, г",
  fat: "Жиры, г",
  carbohydrates: "Углеводы, г",
};

const IngredientDetails= () => {
  const { modalProps } = useSelector(getModalState);
  const location = useLocation();
  let background = location.state && location.state.background;

  const [ingredient, setIngredient] = useState({});

  useEffect(() => {
    background = location.state && location.state.background;
    if (Object.keys(modalProps).length !== 0) {
        setIngredient(modalProps)
    } else {
        const ingredientId = location.pathname.split('/')[2] //id ингредиента из url
        getIngredients()
        .then(res => {
            const currentIngredient = res.data.find(ingredient => ingredient._id === ingredientId) // находим по id
            setIngredient(currentIngredient)
        })
    }
}, [location])

  return (
    <div className={background ? style.modal: style.main}>
      <h2 className={`${style.title} ${background ? 'pl-10': ''}  text text_type_main-large`}>
        Детали ингредиента
      </h2>
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
    </div>
  )
}


export default IngredientDetails;