import styles from './profile-data-page.module.css'
import {
  Button,
  EmailInput,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";

export const ProfileDataPage = () => {
  return (
    <form className={styles.inputs}>
      <Input name="name" type={"text"} placeholder={"Имя"} icon={"EditIcon"} default={true} />
      <EmailInput name="email" placeholder={"Логин"} extraClass="mt-6 mb-6" icon={"EditIcon"} />
      <PasswordInput name="password" extraClass="mb-6" icon={"EditIcon"} />
      <div className={styles.group_button}>
        <Button
          htmlType="button"
          type="secondary"
          size="medium"
        >
          Отмена
        </Button>
        <Button htmlType="submit" type="primary" size="medium">
          Сохранить
        </Button>
      </div>
    </form>
  );
};
