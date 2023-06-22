import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import React, { useEffect, useState  } from "react";
import { getData } from "../../api/api";
import { ConstructorContext, IngredientsContext } from "../../services/ingredients-context";
import { bunType } from "../../utils/constant";

const constructorInitialState = { bun: null, ingredients: [], price: 0 }

function reducer(state, action) {
  switch (action.type) {
    case "add" :
      const bunPrice = state.bun !== null ? state.bun.price: 0

      if (action.ingredient.type === bunType) {
        return {
          bun: action.ingredient,
          ingredients: state.ingredients,
          price: state.price + (action.ingredient.price * 2) - (bunPrice * 2)
        }
      } else {
        return {
          bun: state.bun,
          ingredients: [...state.ingredients, action.ingredient],
          price: state.price + action.ingredient.price
        }
      }
    default:
      throw new Error(`Wrong type of action: ${action.type}`);
  }
}

const App = () => {
  const [constructorState, constructorDispatcher] = React.useReducer(reducer, constructorInitialState, undefined);

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
            <ConstructorContext.Provider value={{ constructorState, constructorDispatcher }}>
              <BurgerIngredients ingredients={ingredients}/>
              <BurgerConstructor/>
            </ConstructorContext.Provider>
          </main>
        </>
      )
      }
    </div>
  );
}

export default App;
