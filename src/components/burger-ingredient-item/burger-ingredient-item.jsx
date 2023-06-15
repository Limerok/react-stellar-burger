import React from "react";
import {CurrencyIcon, Counter} from "@ya.praktikum/react-developer-burger-ui-components";
import styleItem from "./burger-ingredient-item.module.css";
import PropTypes from 'prop-types';
import { ingredientPropType } from '../../utils/prop-types';

const BurgerIngredientItem = ({ingredient, openIngredient}) => {

  return (
    <div className={styleItem.container} onClick={()=> openIngredient(ingredient)}>
      <Counter count={1} size="default" extraClass="m-1" />
      <img className="ml-4 mr-4 mb-1" src={ingredient.image} alt={ingredient.name} />
      <div className={styleItem.price}>
        <p className="text text_type_digits-default">{ingredient.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className="text text_type_main-default">
        {ingredient.name}
      </p>
    </div>
  )
}

BurgerIngredientItem.propTypes = {
  ingredient: ingredientPropType.isRequired,
  openIngredient: PropTypes.func.isRequired,
};

export default React.memo(BurgerIngredientItem);