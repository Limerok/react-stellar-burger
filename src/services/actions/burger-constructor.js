import { v4 as uuidv4 } from "uuid";

export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';
export const SWAP_INGREDIENT = 'SWAP_INGREDIENT';
export const RESET_CONSTRUCTOR = 'RESET_CONSTRUCTOR';

export const addIngredient = (ingredient) => ({
    type: ADD_INGREDIENT,
    ingredient: {
      ...ingredient,
      uniqueId: uuidv4()
    }
});

export const resetConstructor = () => ({
  type: RESET_CONSTRUCTOR
});

export const deleteIngredient = (ingredient) => ({
    type: DELETE_INGREDIENT,
    ingredient: ingredient
});

export const swapIngedients = (fromIndex, toIndex) => ({
  type: SWAP_INGREDIENT,
  fromIndex: fromIndex,
  toIndex: toIndex
});