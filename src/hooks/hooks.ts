import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "../services/store";
import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";

export type AppThunk<TReturn = void> = ActionCreator<ThunkAction<TReturn, Action, RootState, Action>>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;