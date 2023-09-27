import {
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS
} from '../actions/burger-ingredients';

const ingrenientsInitialState = {
  ingredients: [],
  ingredientsRequest: false,
  ingredientsFailed: false,
}

export const burgerIngredientsReducer = (state = ingrenientsInitialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST: {
      return {
          ...state, 
          ingredientsRequest: true,
      }
    }
    case GET_INGREDIENTS_SUCCESS: {
      return {
        ...state, 
        ingredientsFailed: false, 
        ingredients: action.ingredients, 
        ingredientsRequest: false,
      }
    }
    case GET_INGREDIENTS_FAILED: {
      return {
          ...state,
          ingredientsFailed: true,
      }
    }
    default: {
      return state
    }
  }
}