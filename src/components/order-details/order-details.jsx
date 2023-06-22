import { CheckMarkIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./order-details.module.css";
import PropTypes from "prop-types";
import React from "react";

const OrderDetails = ({orderNumber}) => {
  const orderInfo = {
    number: orderNumber,
    textId: "идентификатор заказа",
    orderStatus: "Ваш заказ начали готовить",
    orderDescription: "Дождитесь готовности на орбитальной станции",
  };

  return (
    <ul className={style.container}>
      <li className="mt-10">
        <p className={`${style.number} text text_type_digits-large`}>
          {orderInfo.number}
        </p>
        <p className={`${style.text_id} text text_type_main-medium mt-8`}>
          {orderInfo.textId}
        </p>
      </li>
      <li className="mt-15 mb-15">
        <div className={style.order_check}>
          <div className={style.order_icon}>
            <CheckMarkIcon type="primary"/>
          </div>
        </div>
      </li>
      <li className="mb-30">
        <p className={`${style.order_status} text text_type_main-default mb-2`}>
          {orderInfo.orderStatus}
        </p>
        <p className={`${style.order_description} text text_type_main-default text_color_inactive`}>
          {orderInfo.orderDescription}
        </p>
      </li>
    </ul>
  )
}

OrderDetails.propTypes = {
  orderNumber: PropTypes.number,
};

export default React.memo(OrderDetails);