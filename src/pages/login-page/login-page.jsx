import {
  Button,
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./login-page.module.css";
import { Link } from "react-router-dom";
import { RoutePathname } from "../../utils/constant";

export const LoginPage = () => {
  return (
    <form className={styles.main}>
      <h1 className="text text_type_main-medium">Вход</h1>
      <EmailInput extraClass="mt-6" />
      <PasswordInput name={"password"} extraClass="mt-6" />
      <Button
        htmlType="button"
        type="primary"
        size="medium"
        extraClass="mt-6 mb-20"
      >
        Войти
      </Button>
      <div className={styles.subtitle}>
        <p className="text text_type_main-default text_color_inactive">
          Вы — новый пользователь?
        </p>
        <Link to={RoutePathname.registerPage}>
          <Button
            extraClass="text text_type_main-default"
            htmlType="button"
            type="secondary"
            size="small"
          >
            Зарегистрироваться
          </Button>
        </Link>
      </div>
      <div className={`${styles.subtitle} mt-4`}>
        <p className="text text_type_main-default text_color_inactive">
          Забыли пароль?
        </p>
        <Link to={"/forgot-password"}>
          <Button
            extraClass="text text_type_main-default"
            htmlType="button"
            type="secondary"
            size="small"
          >
            Восстановить пароль
          </Button>
        </Link>
      </div>
    </form>
  );
};
