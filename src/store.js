import { combineReducers, configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import UserSlice from "./features/User/UserSlice";
import HomeSlice from "./features/Home/HomeSlice";

const persitConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({ user: UserSlice, home: HomeSlice });
const persistedReducer = persistReducer(persitConfig, reducer);
export const store = configureStore({
  reducer: persistedReducer,
});
