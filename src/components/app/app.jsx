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
import IngredientDetails from "../ingredient-details/ingredient-details";
import Modal from "../modal/modal";

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const background = location.state && location.state.background;

  const handleModalClose = () => {
    navigate(-1);
  };

  return (
    <div className={styles.app}>
      <AppHeader />
      <Routes location={background || location}>
        <Route path={RoutePathname.homePage} element={<HomePage />} />
        <Route path={RoutePathname.ingredientDetailsPage} element={<IngredientDetails />} />

        <Route path={RoutePathname.loginPage} element={<LoginPage/>}/>
        <Route path={RoutePathname.registerPage} element={<RegistrationPage />}/>
        <Route path={RoutePathname.forgotPassPage} element={<ForgotPasswordPage/>}/>
        <Route path={RoutePathname.resetPassPage} element={<ResettPasswordPage/>} />

        <Route path={RoutePathname.profilePage} element={<ProfilePage/>}>
          <Route path={RoutePathname.profilePage} element={<ProfileDataPage/>} />
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
