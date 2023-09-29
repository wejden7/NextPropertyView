import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authenticationReducer from "@/slice/authenticationSlice";

const rootReducer = combineReducers({
  authentication: authenticationReducer,
});
export const store = configureStore({
  reducer: rootReducer,
});
