import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './resett-password-page.module.css'
import { Link } from "react-router-dom";
import { RoutePathname } from "../../utils/constant";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { resetPassword } from "../../services/actions/reset-password";

export const ResettPasswordPage = () => {
  const dispatch = useDispatch();
  const [password, setPassword] = useState();
  const [token, setToken] = useState();

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  }

  const onChangeToken = (e) => {
    setToken(e.target.value);
  }

  const reset = () => {
    if (password && token) {
      dispatch(resetPassword(password))
    }
  }

  return (
    <form className={styles.main}>
      <h1 className="text text_type_main-medium">Восстановление пароля</h1>
      <PasswordInput
        name="password"
        extraClass="mt-5"
        placeholder="Введите новый пароль"
        onChange={onChangePassword}
        value={password}
      />
      <Input
        name="token"
        extraClass="mt-6"
        placeholder="Введите код из письма"
        onChange={onChangeToken}
        value={token}
      />

      <Button htmlType="button" type="primary" size="medium" extraClass="mt-6" onClick={reset}>
        Сохранить
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
