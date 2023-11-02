import { Logo, BurgerIcon, ListIcon, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./app-header.module.css"
import { Link, useLocation } from "react-router-dom";
import { RoutePathname } from "../../utils/constant";
import { chekUrl } from "../../utils/utils";

const AppHeader = () => {
  const location = useLocation();
  const pageUrl = location.pathname; //Адрес текущей страницы

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className="pt-4 pb-4 pl-5 pr-5">
            <Link to={RoutePathname.homePage} className={styles.link}>
              <BurgerIcon type={chekUrl(pageUrl, RoutePathname.homePage, 'primary', 'secondary')}/>
              <p className={`text text_type_main-default ml-2 ${chekUrl(pageUrl, RoutePathname.homePage, '', 'text_color_inactive')}`}>
                Конструктор
              </p>
            </Link>
          </li>
          <li className="pt-4 pb-4 pl-5 pr-5">
            <a href="" className={styles.link}>
              <ListIcon type="secondary" />
              <p className="text text_type_main-default text_color_inactive ml-2">
                Лента заказов
              </p>
            </a>
          </li>
          <li className={styles.logo}>
            <Logo/>
          </li>
          <li className="pt-4 pb-4 pl-5 pr-5">
            <Link to={RoutePathname.loginPage} className={styles.link}>
              <ProfileIcon type={chekUrl(pageUrl,RoutePathname.loginPage, 'primary', 'secondary')} />
              <p className={`text text_type_main-default ml-2 ${chekUrl(pageUrl, RoutePathname.loginPage, '', 'text_color_inactive')}`}>
                Личный кабинет
              </p>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default AppHeader;