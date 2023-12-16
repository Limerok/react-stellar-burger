import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./app-header.module.css";
import { NavLink } from "react-router-dom";
import { RoutePathname } from "../../utils/constant";

export const AppHeader = () => {

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className="pt-4 pb-4 pl-5 pr-5">
            <NavLink to={RoutePathname.homePage} className={styles.link}>
              {({ isActive }) => (
                <>
                  <BurgerIcon type={isActive ? "primary" : "secondary"} />
                  <p
                    className={`text text_type_main-default ml-2 ${isActive ? "" : "text_color_inactive"
                      }`}
                  >
                    Конструктор
                  </p>
                </>
              )}
            </NavLink>
          </li>
          <li className="pt-4 pb-4 pl-5 pr-5">
            <NavLink to={RoutePathname.feedPage} className={styles.link}>
              {({ isActive }) => (
                <>
                  <ListIcon type={isActive ? "primary" : "secondary"} />
                  <p
                    className={`text text_type_main-default ml-2 ${isActive ? "" : "text_color_inactive"
                      }`}
                  >
                    Лента заказов
                  </p>
                </>
              )}
            </NavLink>
          </li>
          <li className={styles.logo}>
            <Logo />
          </li>
          <li className="pt-4 pb-4 pl-5 pr-5">
            <NavLink to={RoutePathname.profilePage} className={styles.link}>
              {({ isActive }) => (
                <>
                  <ProfileIcon type={isActive ? "primary" : "secondary"} />
                  <p
                    className={`text text_type_main-default ml-2 ${isActive ? "" : "text_color_inactive"
                      }`}
                  >
                    Личный кабинет
                  </p>
                </>
              )}
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AppHeader;
