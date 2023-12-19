import { useEffect } from "react";
import styles from "./profile-data-page.module.css";
import {
  Button,
  EmailInput,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { getUser, uptadeUserData } from "../../services/user/action";
import { useForm } from "../../hooks/useForm";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { getUserState } from "../../services/user/slice";

export const ProfileDataPage = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const { user } = useAppSelector(getUserState);


  const { values, handleChange, setValues } = useForm({
    name: "",
    email: "",
    password: "",
  });

  const setDefault = () => {
    if (user !== null) {
      setValues({
        name: user.name,
        email: user.email,
        password: '',
      });
    }
  }

  const submitData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(uptadeUserData({email: values.email, name: values.name, password: values.password}));
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
        isIcon={true}
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
        user?.name !== values.name ||
        user.email !== values.email ? styles.buttons_active : styles.buttons}>
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
