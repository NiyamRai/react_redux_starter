import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { clearStoreThunk, loginThunk } from "./UserThunk";
import {
  addUserToLocalStorage,
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
} from "../../utils/LocalStorage";

const InitialState = {
  user: getUserFromLocalStorage(),
  isLoadingUser: false,
};

//login user
export const loginUser = createAsyncThunk("user/loginuser", loginThunk);

//logout user
export const clearStore = createAsyncThunk("user/logout", clearStoreThunk);

const userSlice = createSlice({
  name: "user",
  initialState: InitialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      removeUserFromLocalStorage();
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoadingUser = true;
      })
      .addCase(loginUser.rejected, (state) => {
        state.isLoadingUser = false;
        alert("Error while login!");
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        alert("Login Successfull!");
        state.isLoadingUser = false;
        addUserToLocalStorage(payload);
        state.user = payload;
      })
      .addCase(clearStore.pending, (state) => {
        state.isLoadingUser = true;
      })
      .addCase(clearStore.rejected, (state) => {
        state.isLoadingUser = false;
        alert("Error while login!");
      })
      .addCase(clearStore.fulfilled, (state, { payload }) => {
        state.isLoadingUser = false;
        alert(payload);
      }),
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
