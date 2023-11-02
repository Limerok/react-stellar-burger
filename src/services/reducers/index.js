import { combineReducers } from 'redux';
import { constructorReducer } from './burger-constructor';
import { ingredientsReducer } from './burger-ingredients';
import { orderReducer } from './order-details';
import { modalReducer } from './modal';
import { registerReducer } from './register';
import { forgotPassword } from '../actions/forgot-password';

export const rootReducer = combineReducers({
    burgerConstructor: constructorReducer,
    ingredients: ingredientsReducer,
    order: orderReducer,
    modal: modalReducer,
    registration: registerReducer,
    forgotPassword: forgotPassword
});