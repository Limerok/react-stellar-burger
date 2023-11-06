import {
  Button,
  EmailInput,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./registration-page.module.css";
import { Link } from "react-router-dom";
import { RoutePathname } from "../../utils/constant";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { registerUser } from "../../services/actions/user";
import { useForm } from "../../hooks/useForm";


export const RegistrationPage = () => {
  const dispatch = useDispatch();
  const { values, handleChange } = useForm({
    email: "",
    name: "",
    password: "",
  });

  const register = (e) => {
    e.preventDefault();
    if (values.email && values.name && values.password) {
      dispatch(registerUser(values.email, values.password, values.name));
    }
  };

  return (
    <form className={styles.main}>
      <h1 className="text text_type_main-medium mb-5">Регистрация</h1>
      <Input
        name="name"
        type={"text"}
        placeholder={"Имя"}
        extraClass=""
        value={values.name}
        onChange={handleChange}
      />
      <EmailInput extraClass="mt-6" name="email" value={values.email} onChange={handleChange} />
      <PasswordInput
        name="password"
        extraClass="mt-6"
        value={values.password}
        onChange={handleChange}
      />
      <Button
        htmlType="submit"
        type="primary"
        size="medium"
        extraClass="mt-6"
      >
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
