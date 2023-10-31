import {
  Button,
  ConstructorElement,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import burgerConstructor from "./burger-constructor.module.css";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import { useDispatch, useSelector } from "react-redux";
import {
  addIngredient,
  swapIngedients,
} from "../../services/actions/burger-constructor";
import { ItemTypes } from "../../utils/item-types";
import { getConstructorState } from "../../services/reducers/burger-constructor";
import { getModalState } from "../../services/reducers/modal";
import { useCallback, useEffect, useState } from "react";
import { useDrop } from "react-dnd";
import { ORDER_MODAL } from "../../services/actions/modal";
import { ConstructorIngredient } from "../consructor-ingredient/consructor-ingredient";
import { getOrder } from "../../services/actions/order-details";
import { getOrderState } from "../../services/reducers/order-details";

const BurgerConstructor = () => {
  const dispatch = useDispatch();
    
  const { ingredients, bun } = useSelector(getConstructorState);
  const { modalType } = useSelector(getModalState);
  const {orderRequest} = useSelector(getOrderState);

  const [price, setPrice] = useState(0);

  useEffect(() => {
      let totalPrice = 0;
      ingredients.map(ingredient => (totalPrice += ingredient.price))
      if (bun) {
          totalPrice += (bun.price * 2)
      }
      setPrice(totalPrice);
  }, [ingredients, bun])

  async function createOrder() {
      // Создание массива id ингредиентов для оформления заказа
      const ingredientsId = ingredients.map(ingredient => ingredient._id)
      if ( bun ) {
          ingredientsId.push(bun._id)
      }

      if (ingredientsId.length > 0) {
          // Отправка запроса
          dispatch(getOrder(ingredientsId))
      }
  }

  const moveCard = useCallback((dragIndex, hoverIndex) => {
      dispatch(swapIngedients(dragIndex, hoverIndex))
    }, [])

  const [, dropTarget] = useDrop({
      accept: ItemTypes.INGREDIENT,
      drop(ingredient) {
          dispatch(addIngredient(ingredient))
      },
  });

  return (
    <div ref={dropTarget}>
      <ul className={`ml-4 mr-4 mt-25 ${burgerConstructor.main}`}>
        {bun && (
          <li className={burgerConstructor.li}>
            <ConstructorElement
              extraClass={`mb-4 mr-8 ml-8 ml-6 ${burgerConstructor.element}`}
              text={`${bun.name} (верх)`}
              type="top"
              isLocked={true}
              price={bun.price}
              thumbnail={bun.image_mobile}
            />
          </li>
        )}
        <div className={`custom-scroll ${burgerConstructor.wrapper}`}>
          {ingredients.map((ingredient, index) => (
            <ConstructorIngredient
              key={ingredient.uniqueId}
              ingredient={ingredient}
              index={index}
              moveCard={moveCard}
            />
          ))}
        </div>
        {bun && (
          <li className={burgerConstructor.li}>
            <ConstructorElement
              extraClass={`mt-4 mr-8 ml-8 mb-10 ${burgerConstructor.element}`}
              text={`${bun.name} (низ)`}
              type="bottom"
              isLocked={true}
              price={bun.price}
              thumbnail={bun.image_mobile}
            />
          </li>
        )}
      </ul>
      <div className={burgerConstructor.sum}>
        <div className={`mr-10 ${burgerConstructor.price}`}>
          <p className="text text_type_digits-medium mr-4">{price}</p>
          <CurrencyIcon />
        </div>
        {bun === null ? (
        <Button extraClass="mr-4" htmlType="button" type="primary" size="medium" disabled>
          Оформить заказ
        </Button>) : (
        <Button extraClass="mr-4" htmlType="button" type="primary" size="medium" onClick={createOrder}>
          Оформить заказ
        </Button>) }
      </div>
      {modalType === ORDER_MODAL && (
        <Modal onClose={()=>{}}>
          {orderRequest ? <p className={burgerConstructor.load}>Оформление заказа...</p> :(
            <OrderDetails />
          )}
        </Modal>
      )}
    </div>
  );
};

export default BurgerConstructor;
