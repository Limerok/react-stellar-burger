import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "../services/store";
import { ThunkAction } from "redux-thunk";
import { TConstructorActions } from "../services/constructor/slice";
import { TUserActions } from "../services/user/slice";
import { TOrderActions } from "../services/order/slice";
import { TModalActions } from "../services/modal/slice";
import { THistoryActions } from "../services/history/action";
import { TIngredientActions } from "../services/ingredients/slice";
import { TFeedActions } from "../services/feed/action";

export type TAppActions =
  | TConstructorActions
  | TUserActions
  | TOrderActions
  | TModalActions
  | THistoryActions
  | TIngredientActions
  | TFeedActions;


export type AppThunk<TReturn = void> = ThunkAction<TReturn, RootState, unknown, TAppActions>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;