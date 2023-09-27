import React from "react";
import {
  Button,
  ConstructorElement,
  CurrencyIcon,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./burger-constructor.module.css";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import { ConstructorContext } from "../../services/ingredients-context";
import { getOrder } from "../../api/api";
import { v4 as uuidv4 } from 'uuid';

const BurgerConstructor = () => {
  const { constructorState } = React.useContext(ConstructorContext);
  const [orderNumber, setOrderNumber] = React.useState("");

  async function createOrder() {
    const ingredientsId = constructorState.ingredients.map((ingredient) => {
        return ingredient._id
    })
    if (constructorState.bun) {
        ingredientsId.push(constructorState.bun._id)
    }

    if (ingredientsId.length > 0) {
        try {
            const data = await getOrder(ingredientsId);
            setOrderNumber(data.order.number)

        } catch (err) {
            console.log("Post error: ", err)
        }
    }
}


  return (
    <section className={`${style.section} mt-25 pl-4`}>
      <div className={style.container}>
        <div className="ml-8">
          {constructorState.bun && (
            <ConstructorElement
              type="top"
              isLocked
              text={`${constructorState.bun.name} (верх)`}
              price={constructorState.bun.price}
              thumbnail={constructorState.bun.image}
            />
          )}
        </div>
        <ul className={`${style.list} custom-scroll`}>
          {constructorState.ingredients.map((item) => (
            <li key={uuidv4()} className={`${style.point}`}>
              <DragIcon type="primary" />
              <ConstructorElement
                text={item.name}
                price={item.price}
                thumbnail={item.image}
              />
            </li>
          ))}
        </ul>
        <div className="ml-8 mb-10">
          {constructorState.bun && (
            <ConstructorElement
              type="bottom"
              isLocked
              text={`${constructorState.bun.name} (низ)`}
              price={constructorState.bun.price}
              thumbnail={constructorState.bun.image}
            />
          )}
        </div>
      </div>
      <div className={`${style.order} mr-4`}>
        <div className={`${style.price} mr-10`}>
          <p className="text text_type_digits-medium mr-2">
            {constructorState.price}
          </p>
          <CurrencyIcon type="primary" />
        </div>

        <Button
          onClick={createOrder}
          htmlType="button"
          type="primary"
          size="medium"
        >
          Нажми на меня
        </Button>
      </div>
      {orderNumber && (
        <Modal closeModal={()=>{setOrderNumber('')}}>
          <OrderDetails orderNumber={orderNumber} />
        </Modal>
      )}
    </section>
  );
};


export default React.memo(BurgerConstructor);
