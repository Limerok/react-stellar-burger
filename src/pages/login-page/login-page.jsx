import {
  Button,
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./login-page.module.css";
import { Link, useNavigate } from "react-router-dom";
import { RoutePathname } from "../../utils/constant";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { login } from "../../services/actions/user";


export const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  }
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  }

  const signIn = () => {
    if (email && password) {
      dispatch(login(email, password))
    }
  }

  return (
    <form className={styles.main}>
      <h1 className="text text_type_main-medium">Вход</h1>
      <EmailInput extraClass="mt-6" value={email} onChange={onChangeEmail}/>
      <PasswordInput name={"password"} extraClass="mt-6" value={password} onChange={onChangePassword}/>
      <Button
        htmlType="button"
        type="primary"
        size="medium"
        extraClass="mt-6 mb-20"
        onClick={signIn}
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
