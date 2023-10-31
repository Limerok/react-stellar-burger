import { Link, useLocation, useNavigate } from 'react-router-dom';
import image404 from '../../images/404-page.png';
import styles from './not-found404.module.css'
import { RoutePathname } from '../../utils/constant';


export const NotFound404 = () => {
  const location = useLocation();

  return (
    <div className={`mt-20 ${styles.container}`}>
      <img className={styles.image} src={image404} alt="ошибка 404 - такой страницы не существует" />
      <div className={styles.subtitle}>
        <p className="text text_type_main-default text_color_inactive">
          Страница с URL адресом "{location.pathname}" не существует
        </p>
        <Link className="text text_type_main-default text_color_inactive" to={RoutePathname.homePage}>
          Вернуться на главную
        </Link>
      </div>
    </div>
  )
}