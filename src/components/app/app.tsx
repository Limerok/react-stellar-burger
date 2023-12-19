import { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { checkUserAuth } from "../../services/user/action";
import { loadIngredients } from "../../services/ingredients/action";
import AppHeader from "../app-header/app-header";
import { RoutePathname } from "../../utils/constant";
import styles from './app.module.css';
import { Modal } from "../modal/modal";
import { IngredientDetails } from "../ingredient-details/ingredient-details";
import { OrderInfo } from "../order-info/order-info";
import { NotFound404 } from "../../pages/not-found404/not-found404";
import { OnlyAuth, OnlyUnAuth } from "../protected-route/protected-route";
import { FeedPage } from "../../pages/feed-page/feed-page";
import { HomePage } from "../../pages/home-page/home-page";
import { LoginPage } from "../../pages/login-page/login-page";
import { ForgotPasswordPage } from "../../pages/forgot-password-page/forgot-password-page";
import { ResettPasswordPage } from "../../pages/resett-password-page/resett-password-page";
import { ProfilePage } from "../../pages/profile-page/profile-page";
import { ProfileDataPage } from "../../pages/profile-data-page/profile-data-page";
import { ProfileOrders } from "../../pages/profile-orders-page/profile-orders-page";
import { useAppDispatch } from "../../hooks/hooks";
import { RegistrationPage } from "../../pages/registration-page/registration-page";

export const App = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const background = location.state && location.state.background;

  useEffect(() => {
    dispatch(checkUserAuth());
    dispatch(loadIngredients());
  }, []);

  const handleModalClose = () => {
    navigate(-1);
  };

  return (
    <div className={styles.app}>
      <AppHeader />
      <Routes location={background || location}>
        <Route path={RoutePathname.homePage} element={<HomePage />} />
        <Route path={RoutePathname.ingredientDetailsPage} element={<IngredientDetails />} />
        <Route path={RoutePathname.feedOrderInfoPage} element={<OrderInfo />} />
        <Route path={RoutePathname.profileOrdersInfoPage} element={<OnlyAuth component={<OrderInfo />} />} />

        <Route path={RoutePathname.loginPage} element={<OnlyUnAuth component={<LoginPage />} />} />
        <Route path={RoutePathname.registerPage} element={<OnlyUnAuth component={<RegistrationPage />} />} />
        <Route path={RoutePathname.forgotPassPage} element={<OnlyUnAuth component={<ForgotPasswordPage />} />} />
        <Route path={RoutePathname.resetPassPage} element={<OnlyUnAuth component={<ResettPasswordPage />} />} />
        <Route path={RoutePathname.feedPage} element={<FeedPage />} />

        <Route path={RoutePathname.profilePage} element={<OnlyAuth component={<ProfilePage />} />}>
          <Route path={RoutePathname.profilePage} element={<OnlyAuth component={<ProfileDataPage />} />} />
          <Route path={RoutePathname.ordersPage} element={<OnlyAuth component={<ProfileOrders />} />} />
        </Route>
        <Route path={RoutePathname.notFound404Page} element={<NotFound404 />} />
      </Routes>



      {background && (
        <Routes>
          <Route
            path={RoutePathname.ingredientDetailsPage}
            element={
              <Modal onClose={handleModalClose}>
                <IngredientDetails />
              </Modal>
            }
          />
          <Route
            path={RoutePathname.profileOrdersInfoPage}
            element={
              <Modal onClose={handleModalClose}>
                <OrderInfo />
              </Modal>
            }
          />
          <Route
            path={RoutePathname.feedOrderInfoPage}
            element={
              <Modal onClose={handleModalClose}>
                <OrderInfo />
              </Modal>
            }
          />
        </Routes>
      )}
    </div>
  );
};

export default App;
