import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import { HomePage } from "../../pages/home-page/home-page";
import { RegistrationPage } from "../../pages/registration-page/registration-page";
import { LoginPage } from "../../pages/login-page/login-page";
import { ForgotPasswordPage } from "../../pages/forgot-password-page/forgot-password-page";
import { ResettPasswordPage } from "../../pages/resett-password-page/resett-password-page";
import { ProfilePage } from "../../pages/profile-page/profile-page";
import { ProfileDataPage } from "../../pages/profile-data-page/profile-data-page";
import { RoutePathname } from "../../utils/constant";
import { NotFound404 } from "../../pages/not-found404/not-found404";
import { OnlyAuth, OnlyUnAuth } from "../protected-route/protected-route";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { checkUserAuth } from "../../services/actions/user";
import { IngredientDetails } from "../ingredient-details/ingredient-details";
import { Modal } from "../modal/modal";
import { ProfileOrdersPage } from "../../pages/profile-orders-page/profile-orders-page";

const App = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const background = location.state && location.state.background;

  useEffect(() => {
    dispatch(checkUserAuth());
  }, [])

  const handleModalClose = () => {
    navigate(-1);
  };

  return (
    <div className={styles.app}>
      <AppHeader />
      <Routes location={background || location}>
        <Route exact path={RoutePathname.homePage} element={<HomePage />} />
        <Route path={RoutePathname.ingredientDetailsPage} element={<IngredientDetails />} />

        <Route path={RoutePathname.loginPage} element={<OnlyUnAuth component={<LoginPage />}/>} />
        <Route path={RoutePathname.registerPage} element={<OnlyUnAuth component={<RegistrationPage />}/>} />
        <Route path={RoutePathname.forgotPassPage} element={<OnlyUnAuth component={<ForgotPasswordPage />} />} />
        <Route path={RoutePathname.resetPassPage} element={<OnlyUnAuth component={<ResettPasswordPage />} />}/>

        <Route path={RoutePathname.profilePage} element={<OnlyAuth component={<ProfilePage />} />}>
          <Route path={RoutePathname.profilePage} element={<OnlyAuth component={<ProfileDataPage />} />}/>
          <Route path={RoutePathname.ordersPage} element={<OnlyAuth component={<ProfileOrdersPage />} />}/>
        </Route>
        <Route path={RoutePathname.notFound404Page} element={<NotFound404/>}/>
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
        </Routes>
      )}
    </div>
  );
};

export default App;
