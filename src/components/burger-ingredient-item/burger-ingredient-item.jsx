import React from "react";
import {CurrencyIcon, Counter} from "@ya.praktikum/react-developer-burger-ui-components";
import styleItem from "./burger-ingredient-item.module.css";
import PropTypes from 'prop-types';
import { useDrag } from "react-dnd";
import { ingredientPropType } from '../../utils/prop-types';
import { useSelector } from "react-redux";
import { getConstructorState } from "../../services/reducers/burger-constructor";

const BurgerIngredientItem = ({ingredient, openIngredientDetails }) => {
  const { ingredients, bun } = useSelector(getConstructorState)
  const [count, setCount] = React.useState(0);

  const [, dragRef] = useDrag({
    type: "ingredient",
    item: ingredient,
    collect: monitor => ({
        didDrop: monitor.didDrop(),
        item: monitor.getItem()
    })
});

  React.useEffect(() => {
    let ingredientCount = 0
    
    if (bun && ingredient.type === "bun" && ingredient._id === bun._id) {
        ingredientCount = 1;
    } else {
        ingredientCount = ingredients.filter(item => item._id === ingredient._id).length;
    }
    setCount(ingredientCount)
  }, [bun, ingredients])

  function clickIngredient() {
    openIngredientDetails(ingredient)
  }

  return (
    <div ref={dragRef} className={styleItem.container} onClick={clickIngredient}>
      { count > 0 &&
        <Counter count={count} size="default" extraClass="m-1" />
      }
      <img className="ml-4 mr-4 mb-1" src={ingredient.image} alt={ingredient.name} />
      <div className={styleItem.price}>
        <p className="text text_type_digits-default">{ingredient.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className={`text text_type_main-default ${styleItem.center}`}>
        {ingredient.name}
      </p>
    </div>
  )
}

BurgerIngredientItem.propTypes = {
  ingredient: ingredientPropType.isRequired,
  openIngredientDetails: PropTypes.func.isRequired,
};

export default BurgerIngredientItem;