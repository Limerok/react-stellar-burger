import {
  Button,
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./login-page.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { login } from "../../services/user/action";
import { RoutePathname } from "../../utils/constant";
import { AppThunk, useAppDispatch, useAppSelector } from "../../hooks/hooks";



export const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector((store) => store.user.user);
  
  const { values, handleChange } = useForm({
    email: "",
    password: "",
});

const signIn = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  if(values.email && values.password) {
      dispatch<AppThunk>(
          login(values.email, values.password)
      )
      /* .then(() => {
          navigate(RoutePathname.homePage)
      })
      .catch(err => {
          console.log(`Error: ${err}`)
      }) */
  }
}

  return (
    <form className={styles.main} onSubmit={signIn}> 
      <h1 className="text text_type_main-medium">Вход</h1>
      <EmailInput name="email" extraClass="mt-6" value={values.email} onChange={handleChange}/>
      <PasswordInput name={"password"} extraClass="mt-6" value={values.password} onChange={handleChange}/>
      <Button
        htmlType="submit"
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
        <Link to={RoutePathname.forgotPassPage}>
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
