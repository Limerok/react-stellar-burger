import { useDispatch } from "react-redux";
import styles from "./profile-data-page.module.css";
import { useState } from "react";
import {
  Button,
  EmailInput,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";

export const ProfileDataPage = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onChangeName = (e) => {
    setName(e.target.value);
    console.log(name)
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
    console.log(email)
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
    console.log(password)
  };

  const replaseData = (e) => {
    e.preventDefault();
    //Временно
    console.log(name, email, password);
  };

  return (
    <form className={styles.inputs}>
      <Input
        name="name"
        type={"text"}
        placeholder={"Имя"}
        icon={"EditIcon"}
        default={true}
        value={name}
        onChange={onChangeName}
      />
      <EmailInput
        name="email"
        placeholder={"Логин"}
        extraClass="mt-6 mb-6"
        icon={"EditIcon"}
        value={email}
        onChange={onChangeEmail}
      />
      <PasswordInput
        name="password"
        extraClass="mb-6"
        icon={"EditIcon"}
        value={password}
        onChange={onChangePassword}
      />
      <div className={styles.group_button}>
        <Button
          htmlType="button"
          type="secondary"
          size="medium"
          onClick={replaseData}
        >
          Отмена
        </Button>
        <Button htmlType="submit" type="primary" size="medium" onClick={replaseData}>
          Сохранить
        </Button>
      </div>
    </form>
  );
};
