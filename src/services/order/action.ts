import { createAsyncThunk } from "@reduxjs/toolkit";
import { orderFailed, orderRequest, orderSuccess } from "./slice";
import { ICustomHeaders, IOptions, IOrderResponse } from "../../types/api";
import { fetchWithRefresh } from "../../utils/api";
import { apiUrl } from "../../utils/constant";
import { ORDER_MODAL, openModal } from "../modal/slice";
import { clearIngredients } from "../constructor/slice";

export const getOrder = createAsyncThunk(
  'order',
  async (ingredientsId: Array<string>, {dispatch}) => {
      dispatch(orderRequest());
      const settings: IOptions = {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              authorization: localStorage.getItem('accessToken')
          } as ICustomHeaders,
          body: JSON.stringify({ 'ingredients': ingredientsId })
      };
      
      fetchWithRefresh<IOrderResponse>(`${apiUrl}/orders`, settings)
      .then(res => {
          if(res && res.success) {
              dispatch(orderSuccess(res.order));
              dispatch(openModal(ORDER_MODAL));
              dispatch(clearIngredients());
          } else {
              dispatch(orderFailed());
          }
      })
      .catch (() => dispatch(orderFailed()));
  }
);
