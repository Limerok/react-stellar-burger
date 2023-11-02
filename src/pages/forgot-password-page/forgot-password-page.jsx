import { Button, EmailInput } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './forgot-password-page.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { RoutePathname } from '../../utils/constant'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { forgotPassword } from '../../services/actions/forgot-password'

export const ForgotPasswordPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState();

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  }

  const forgot = () => {
    if (email) {
      dispatch(forgotPassword(email));
      //временное решение для просмотра работы странички reset-pass
      navigate('/reset-password'); 
    }
  }


  return (
    <form className={styles.main}>
      <h1 className="text text_type_main-medium mb-5">Восстановление пароля</h1>
      <EmailInput extraClass="mt-1" placeholder="Укажите e-mail" value={email} onChange={onChangeEmail}/>
      <Button htmlType="button" type="primary" size="medium" extraClass="mt-6" onClick={forgot}>
        Восстановить
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
  )
}