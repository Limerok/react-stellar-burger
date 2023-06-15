import { Logo, BurgerIcon, ListIcon, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import headerStyle from "./app-header.module.css"

const AppHeader = () => {
  return (
    <header className={headerStyle.header}>
      <nav className={headerStyle.nav}>
        <ul className={headerStyle.list}>
          <li className="pt-4 pb-4 pl-5 pr-5">
            <a href="" className={headerStyle.link}>
              <BurgerIcon type="primary"/>
              <p className="text text_type_main-default ml-2" style={{color: "#F2F2F3"}}>
                Конструктор
              </p>
            </a>
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
            <a href="" className={headerStyle.link}>
              <ProfileIcon type="secondary" />
              <p className="text text_type_main-default text_color_inactive ml-2">
                Личный кабинет
              </p>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default AppHeader;