import {
  Button,
  EmailInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./forgot-password-page.module.css";
import { Link, useNavigate } from "react-router-dom";
import { RoutePathname } from "../../utils/constant";
import { useState } from "react";
import { forgotPassword } from "../../utils/api";

export const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const onChange = (e) => {
    setEmail(e.target.value);
  };

  const forgot = (e) => {
    e.preventDefault();
    if (email.length !== 0) {
      forgotPassword(email)
        .then(() => {
          localStorage.setItem('forgot-password', true);
          navigate(RoutePathname.resetPassPage);
        })
        .catch(err => {
          console.log(`Error: ${err}`);
        });
    }
  };

  return (
    <form className={styles.main} onSubmit={forgot}>
      <h1 className="text text_type_main-medium mb-5">Восстановление пароля</h1>
      <EmailInput
        extraClass="mt-1"
        placeholder="Укажите e-mail"
        value={email}
        onChange={onChange}
      />
      <Button htmlType="submit" type="primary" size="medium" extraClass="mt-6">
        Восстановить
      </Button>
      <div className={`${styles.subtitle} mt-20`}>
        <p className="text text_type_main-default text_color_inactive">
          Вспомнили пароль?
        </p>
        <Link to={RoutePathname.loginPage}>
          <Button
            extraClass="text text_type_main-default"
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
