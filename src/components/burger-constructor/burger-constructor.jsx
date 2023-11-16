import {
  Button,
  ConstructorElement,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addIngredient,
  swapIngedients,
} from "../../services/constructor/action";
import { ItemTypes } from "../../utils/item-types";
import { getConstructorState } from "../../services/constructor/reducer";
import { getModalState } from "../../services/modal/reducer";
import { useCallback, useEffect, useState } from "react";
import { useDrop } from "react-dnd";
import { ORDER_MODAL } from "../../services/modal/action";
import { ConstructorIngredient } from "../consructor-ingredient/consructor-ingredient";
import { getOrder } from "../../services/order/action";
import { RoutePathname } from "../../utils/constant";
import { getUserState } from "../../services/user/reducer";
import { useNavigate } from "react-router-dom";
import { PacmanLoader } from "react-spinners";
import { OrderDetails } from "../order-details/order-details";
import { Modal } from "../modal/modal";

const BurgerConstructor = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { ingredients, bun } = useSelector(getConstructorState);
  const { modalType } = useSelector(getModalState);

  const [price, setPrice] = useState(0);

  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState("#4C4CFF");

  const { user } = useSelector(getUserState);

  useEffect(() => {
    let totalPrice = 0;
    ingredients.map((ingredient) => (totalPrice += ingredient.price));
    if (bun) {
      totalPrice += bun.price * 2;
    }
    setPrice(totalPrice);
  }, [ingredients, bun]);

  useEffect(() => {
    setLoading(false); // скрываем анимацию при появлении модала
  }, [modalType]);

  async function createOrder() {
    if (!user) {
      navigate(RoutePathname.loginPage);
    } else {
      setLoading(true);
      // Создание массива id ингредиентов для оформления заказа
      const ingredientsId = ingredients.map((ingredient) => ingredient._id);
      if (bun) {
        ingredientsId.push(bun._id);
      }

      if (ingredientsId.length > 0) {
        // Отправка запроса
        dispatch(getOrder(ingredientsId));
      }
    }
  }

  const moveCard = useCallback((dragIndex, hoverIndex) => {
    dispatch(swapIngedients(dragIndex, hoverIndex));
  }, []);

  const [, dropTarget] = useDrop({
    accept: ItemTypes.INGREDIENT,
    drop(ingredient) {
      dispatch(addIngredient(ingredient));
    },
  });

  return (
    <div ref={dropTarget} className={styles.container}>
      <div className={styles.loader}>
        <PacmanLoader
          className={styles}
          color={color}
          loading={loading}
          size={40}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
      <ul className={`ml-4 mr-4 mt-25 ${styles.main} ${loading ? styles.main_blured: ''}`}>
        {bun && (
          <li className={styles.li}>
            <ConstructorElement
              extraClass={`mb-4 mr-8 ml-8 ml-6 ${styles.element}`}
              text={`${bun.name} (верх)`}
              type="top"
              isLocked={true}
              price={bun.price}
              thumbnail={bun.image_mobile}
            />
          </li>
        )}
        <div className={`custom-scroll ${styles.wrapper}`}>
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
          <li className={styles.li}>
            <ConstructorElement
              extraClass={`mt-4 mr-8 ml-8 mb-10 ${styles.element}`}
              text={`${bun.name} (низ)`}
              type="bottom"
              isLocked={true}
              price={bun.price}
              thumbnail={bun.image_mobile}
            />
          </li>
        )}
      </ul>
      <div className={styles.sum}>
        <div className={`mr-10 ${styles.price}`}>
          <p className="text text_type_digits-medium mr-4">{price}</p>
          <CurrencyIcon />
        </div>
        {bun === null ? (
          <Button
            extraClass="mr-4"
            htmlType="button"
            type="primary"
            size="medium"
            disabled
          >
            Оформить заказ
          </Button>
        ) : (
          <Button
            extraClass="mr-4"
            htmlType="button"
            type="primary"
            size="medium"
            onClick={createOrder}
          >
            Оформить заказ
          </Button>
        )}
      </div>
      {modalType === ORDER_MODAL && (
        <Modal onClose={() => {}}>
            <OrderDetails />
        </Modal>
      )}
    </div>
  );
};

export default BurgerConstructor;
