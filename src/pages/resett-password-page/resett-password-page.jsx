import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './resett-password-page.module.css'

export const ResettPasswordPage = () => {
  return (
    <form className={styles.main}>
      <h1 className="text text_type_main-medium">Восстановление пароля</h1>
      <PasswordInput
        name="password"
        extraClass="mt-5"
        placeholder="Введите новый пароль"
      />
      <Input
        name="token"
        extraClass="mt-6"
        placeholder="Введите код из письма"
      />

      <Button htmlType="button" type="primary" size="medium" extraClass="mt-6">
        Сохранить
      </Button>

      <div className={`${styles.subtitle} mt-20`}>
        <p className="text text_type_main-default text_color_inactive">
          Вспомнили пароль?
        </p>
        <Button
          extraClass="text text_type_main-default"
          htmlType="button"
          type="secondary"
          size="small"
        >
          Войти
        </Button>
      </div>
    </form>
  );
};
