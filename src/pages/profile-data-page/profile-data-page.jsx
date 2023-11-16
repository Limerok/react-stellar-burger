import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import styles from "./profile-data-page.module.css";
import { useState } from "react";
import {
  Button,
  EmailInput,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { getUser, uptadeUserData } from "../../services/user/action";
import { useForm } from "../../hooks/useForm";
import { getUserState } from "../../services/user/reducer";

export const ProfileDataPage = () => {
  const dispatch = useDispatch();

  const { user } = useSelector(getUserState);


  const { values, handleChange, setValues } = useForm({
    name: "",
    email: "",
    password: "",
  });
  
  const setDefault = () => {
    setValues({
        name: user.name,
        email: user.email,
        password: '',
    })
  }

  const submitData = (e) => {
    e.preventDefault()
    dispatch(uptadeUserData(values.password, values.name, values.email))
  }

  useEffect(() => {
    dispatch(getUser())
    if (user) {
        setDefault();
    }
  }, [])

  return (
    <form className={styles.inputs} onSubmit={submitData}>
      <Input
        name="name"
        type={"text"}
        placeholder={"Имя"}
        icon={"EditIcon"}
        default={true}
        value={values.name}
        onChange={handleChange}
      />
      <EmailInput
        name="email"
        placeholder={"Логин"}
        extraClass="mt-6 mb-6"
        icon={"EditIcon"}
        value={values.email}
        onChange={handleChange}
      />
      <PasswordInput
        name="password"
        extraClass="mb-6"
        icon={"EditIcon"}
        value={values.password}
        onChange={handleChange}
      />
      <div className={values.password.length !== 0 || 
                        user.name !== values.name || 
                        user.email !== values.email ? styles.buttons_active: styles.buttons }>
        <Button
          htmlType="button"
          type="secondary"
          size="medium"
          onClick={setDefault}
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
