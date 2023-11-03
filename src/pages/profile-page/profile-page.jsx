import { Link, Outlet, useLocation } from "react-router-dom";
import styles from "./profile-page.module.css";
import { chekUrl } from "../../utils/utils";
import { RoutePathname } from "../../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

export const ProfilePage = () => {
  const location = useLocation();
  const pageUrl = location.pathname; //Адрес текущей страницы

  const dispatch = useDispatch();

  const { user } = useSelector((store) => store.user.user);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className={`${styles.main}`}>
      <div className={`pl-5 mr-15 ${styles.content}`}>
        <nav className={`mb-20 ${styles.navigation}`}>
          <Link
            to={"/profile"}
            className={`text text_type_main-medium text_color_inactive pt-4 pb-4 ${chekUrl(
              pageUrl,
              RoutePathname.profilePage,
              styles.link_active,
              styles.link
            )}`}
          >
            Профиль
          </Link>
          <Link
            to={"/profile/orders"}
            className={`text text_type_main-medium text_color_inactive pt-4 pb-4 ${chekUrl(
              pageUrl,
              RoutePathname.ordersPage,
              styles.link_active,
              styles.link
            )}`}
          >
            История заказов
          </Link>
          <a
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
