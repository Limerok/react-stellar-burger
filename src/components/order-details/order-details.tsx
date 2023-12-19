import { CheckMarkIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./order-details.module.css";
import { useAppSelector } from "../../hooks/hooks";
import { getOrderState } from "../../services/order/slice";

export const OrderDetails = (): JSX.Element => {
  const { order } = useAppSelector(getOrderState);

  const orderInfo = {
    textId: "идентификатор заказа",
    orderStatus: "Ваш заказ начали готовить",
    orderDescription: "Дождитесь готовности на орбитальной станции",
  };

  return (
      <ul className={styles.container}>
      <li className="mt-10">
        <p className={`${styles.number} text text_type_digits-large`}>
          {order.number}
        </p>
        <p className={`${styles.text_id} text text_type_main-medium mt-8`}>
          {orderInfo.textId}
        </p>
      </li>
      <li className="mt-15 mb-15">
        <div className={styles.order_check}>
          <div className={styles.order_icon}>
            <CheckMarkIcon type="primary"/>
          </div>
        </div>
      </li>
      <li className="mb-30">
        <p className={`${styles.order_status} text text_type_main-default mb-2`}>
          {orderInfo.orderStatus}
        </p>
        <p className={`${styles.order_description} text text_type_main-default text_color_inactive`}>
          {orderInfo.orderDescription}
        </p>
      </li>
    </ul>
  )
}