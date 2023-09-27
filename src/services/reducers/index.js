import { combineReducers } from 'redux';
import { burgerIngredientsReducer } from './burger-ingredients';
import { burgerConstructorReducer } from './burger-constructor';
import { orderReducer } from './order-details';

export const rootReducer = combineReducers({
  burgerConstructor: burgerConstructorReducer,
  ingredients: burgerIngredientsReducer,
  order: orderReducer
});