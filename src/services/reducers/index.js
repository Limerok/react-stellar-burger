import { combineReducers } from 'redux';
import { constructorReducer } from './burger-constructor';
import { ingredientsReducer } from './burger-ingredients';
import { orderReducer } from './order-details';
import { modalReducer } from './modal';
import { userReducer } from './user';

export const rootReducer = combineReducers({
    burgerConstructor: constructorReducer,
    ingredients: ingredientsReducer,
    order: orderReducer,
    modal: modalReducer,
    user: userReducer
});