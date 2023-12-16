import { NavLink, Outlet,} from "react-router-dom";
import styles from "./profile-page.module.css";
import { useDispatch} from "react-redux";
import { logout } from "../../services/user/action";
import { RoutePathname } from "../../utils/constant";

export const ProfilePage = () => {

  const dispatch = useDispatch();

  return (
    <div className={`${styles.main}`}>
      <div className={`pl-5 mr-15 ${styles.content}`}>
        <nav className={`mb-20 ${styles.navigation}`}>
          <NavLink
            to={RoutePathname.profilePage} end
            className={({ isActive }) => [
              isActive ? styles.link_active : styles.link , 
              "text text_type_main-medium text_color_inactive pt-4 pb-4",
            ].join(" ")}
          >
            Профиль
          </NavLink>
          <NavLink
            to={RoutePathname.ordersPage} end
            className={({ isActive }) => [
              isActive ? styles.link_active : styles.link , 
              "text text_type_main-medium text_color_inactive pt-4 pb-4",
            ].join(" ")}
          >
            История заказов
          </NavLink>
          <a
            onClick={() => dispatch(logout())}
            className={`text text_type_main-medium text_color_inactive pt-4 pb-4 ${styles.link}`}
          >
            Выход
          </a>
        </nav>
        <p className={`text text_type_main-small text_color_inactive`}>
          {" "}
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </div>
      <Outlet />
    </div>
  );
};
