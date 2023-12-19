import { createAsyncThunk } from "@reduxjs/toolkit";
import { ingredientsFailed, ingredientsRequest, ingredientsSuccess } from "./slice";
import { IIngredientResponse, IOptions } from "../../types/api";
import { apiUrl } from "../../utils/constant";
import { request } from "../../utils/api";


export const loadIngredients = createAsyncThunk(
  'ingredients/load',
  async (_, {dispatch}) => {
      dispatch(ingredientsRequest());
      request<IIngredientResponse, IOptions>(`${apiUrl}/ingredients`)
      .then(res => {
          if (res && res.success ) {
              dispatch(ingredientsSuccess(res.data));
          } else {
              dispatch(ingredientsFailed());
          }
      })
      .catch ( err => {
          dispatch(ingredientsFailed());
      });
  });
