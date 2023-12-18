import { createReducer } from "@reduxjs/toolkit";
import {
  ingredientsRequest,
  ingredientsFailed,
  ingredientsSuccess,
} from "./action";
import { TIngedient } from "../../types/ingredient";
import { RootState } from "../store";

interface IIngrenientsInitialState {
  ingredients: Array<TIngedient>;
  ingredientsRequest: boolean;
  ingredientsFailed: boolean;
}

const ingrenientsInitialState = {
  ingredients: [],
  ingredientsRequest: false,
  ingredientsFailed: false,
} as IIngrenientsInitialState;

export const getIngredientsState = (state: RootState) => state.ingredients;

export const ingredientsReducer = createReducer(
  ingrenientsInitialState,
  (builder) => {
    builder
      .addCase(ingredientsRequest, (state) => {
        state.ingredientsRequest = true;
      })
      .addCase(ingredientsSuccess, (state, action) => {
        state.ingredientsFailed = false;
        state.ingredients = action.payload;
        state.ingredientsRequest = false;
      })
      .addCase(ingredientsFailed, (state) => {
        state.ingredientsFailed = true;
      });
  }
);
