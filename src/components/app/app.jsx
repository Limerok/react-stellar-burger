import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import React, { useEffect, useState  } from "react";
import { getData } from "../../api/api";

const App = () => {
  const [ingredients, setIngredients] = React.useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getIngredients();
  }, []);

  const getIngredients = () => {
    setIsLoading(true);
    getData()
      .then((res) => {
        setIngredients(res.data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className={styles.app}>
      {isLoading ? console.log('не загружен') :(
        <>
          <AppHeader/>
          <main className={styles.main}>
            <BurgerIngredients ingredients={ingredients}/>
            <BurgerConstructor ingredients={ingredients}/>
          </main>
        </>
      )
      }
    </div>
  );
}

export default App;
