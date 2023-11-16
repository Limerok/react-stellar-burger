import { OrderCard } from "../../components/order-card/order-card";
import { testOrders } from "../../utils/constant";
import styles from "./profile-orders-page.module.css";

export const ProfileOrdersPage = () => {
  return (
    <div className={`custom-scroll ${styles.wrapper}`}>
      {testOrders.orders.map((order) => (
        <OrderCard order={order} key={order._id} />
      ))}
    </div>
  );
};
