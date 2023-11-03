import {
  Button,
  EmailInput,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './registration-page.module.css'
import { Link } from "react-router-dom";
import { RoutePathname } from "../../utils/constant";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { registerUser } from "../../services/actions/user";

export const RegistrationPage = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onChangeName = (e) => {
    setName(e.target.value);
  }

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  }

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  }

  const register = () => {
    dispatch(registerUser(email, password, name))
  }

  return (
    <form className={styles.main}>
      <h1 className="text text_type_main-medium mb-5">Регистрация</h1>
      <Input type={"text"} placeholder={"Имя"} extraClass="" value={name} onChange={onChangeName} />
      <EmailInput extraClass="mt-6" value={email} onChange={onChangeEmail}/>
      <PasswordInput name={"password"} extraClass="mt-6" value={password} onChange={onChangePassword} />
      <Button htmlType="button" type="primary" size="medium" extraClass="mt-6" onClick={register}>
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
