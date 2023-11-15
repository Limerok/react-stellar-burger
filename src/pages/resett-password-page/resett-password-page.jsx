import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./resett-password-page.module.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { RoutePathname } from "../../utils/constant";
import { resetPassword } from "../../utils/api";
import { useForm } from "../../hooks/useForm";

export const ResettPasswordPage = () => {
  const { values, handleChange } = useForm({
    token: "",
    password: "",
  });

  const navigate = useNavigate();

  const reset = (e) => {
    e.preventDefault();
    resetPassword(values.password, values.token).then(() => {
      localStorage.removeItem("forgot-password");
      navigate(RoutePathname.loginPage);
    });
  };

  return !localStorage.getItem("forgot-password") ? (
    <Navigate to={RoutePathname.homePage} />
  ) : (
    <form className={styles.main} onSubmit={reset}>
      <h1 className="text text_type_main-medium">Восстановление пароля</h1>
      <PasswordInput
        name="password"
        extraClass="mt-5"
        placeholder="Введите новый пароль"
        onChange={handleChange}
        value={values.password}
      />
      <Input
        name="token"
        extraClass="mt-6"
        placeholder="Введите код из письма"
        onChange={handleChange}
        value={values.token} 
      />

      <Button
        htmlType="submit"
        type="primary"
        size="medium"
        extraClass="mt-6"
      >
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
