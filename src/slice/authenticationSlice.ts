import { AnyAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUserApi, updateUserApi } from "@/service/auth";
import Cookies from "js-cookie";

export const getUser = createAsyncThunk(
  "authentication/getUser",
  (token: string, thunkAPI) => getUserApi(token)
);
export const updateUser = createAsyncThunk(
  "authentication/updateUser",
  (data: any, thunkAPI) => updateUserApi(data.data, data.token)
);

const initialState: AuthenticationState = {
  isAuthenticated: false,
  user: null,
};

const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout: (state) => {
      console.log("logout");
      Cookies.remove("token");
      Cookies.remove("refreshToken");
      state.isAuthenticated = false;
      state.user = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getUser.fulfilled, (state, action) => {
        console.log("login successful");
        console.log(action.payload);
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        console.log("update User successful");
        console.log(action.payload);

        state.user = action.payload;
      });
  },
});
export const authenticated = (state: rootState) =>
  state.authentication.isAuthenticated;
export const user = (state: rootState) => state.authentication.user;

export const { login, logout } = authenticationSlice.actions;
export default authenticationSlice.reducer;
