import {
  Button,
  EmailInput,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './registration-page.module.css'
import { Link } from "react-router-dom";
import { RoutePathname } from "../../utils/constant";

export const RegistrationPage = () => {
  return (
    <form className={styles.main}>
      <h1 className="text text_type_main-medium mb-5">Регистрация</h1>
      <Input type={"text"} placeholder={"Имя"} extraClass="" />
      <EmailInput extraClass="mt-6" />
      <PasswordInput name={"password"} extraClass="mt-6" />
      <Button htmlType="button" type="primary" size="medium" extraClass="mt-6">
        Зарегестрироваться
      </Button>
      <div className={styles.subtitle}>
        <p className="text text_type_main-default text_color_inactive">
          Уже зарегистрированы?
        </p>
        <Link to={RoutePathname.loginPage}>
          <Button
            extraClass="text text_type_main-small"
            htmlType="button"
            type="secondary"
            size="small"
          >
            Войти
          </Button>
        </Link>
      </div>
    </form>
  );
};
