import { Logo, BurgerIcon, ListIcon, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import headerStyle from "./app-header.module.css"
import { Link, useLocation } from "react-router-dom";
import { RoutePathname } from "../../utils/constant";
import { chekUrl } from "../../utils/utils";

const AppHeader = () => {
  const location = useLocation();
  const pageUrl = location.pathname; //Адрес текущей страницы

  return (
    <header className={headerStyle.header}>
      <nav className={headerStyle.nav}>
        <ul className={headerStyle.list}>
          <li className="pt-4 pb-4 pl-5 pr-5">
            <Link to={RoutePathname.homePage} className={headerStyle.link}>
              <BurgerIcon type={chekUrl(pageUrl, RoutePathname.homePage, 'primary', 'secondary')}/>
              <p className={`text text_type_main-default ml-2 ${chekUrl(pageUrl, RoutePathname.homePage, '', 'text_color_inactive')}`}>
                Конструктор
              </p>
            </Link>
          </li>
          <li className="pt-4 pb-4 pl-5 pr-5">
            <a href="" className={headerStyle.link}>
              <ListIcon type="secondary" />
              <p className="text text_type_main-default text_color_inactive ml-2">
                Лента заказов
              </p>
            </a>
          </li>
          <li className={headerStyle.logo}>
            <Logo/>
          </li>
          <li className="pt-4 pb-4 pl-5 pr-5">
            <Link to={RoutePathname.loginPage} className={headerStyle.link}>
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