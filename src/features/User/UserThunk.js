import customFetch from "../../utils/Config/axiosConfig";
import { logout } from "./UserSlice";

export const loginThunk = async (data, thunkAPI) => {
  console.log(data);
  try {
    const resp = await customFetch.post("/auth/login", data);
    console.log(resp);
    return resp?.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error?.message);
  }
};
export const clearStoreThunk = async (message, thunkAPI) => {
  try {
    thunkAPI.dispatch(logout());
    return message;
  } catch (error) {
    return Promise.reject();
  }
};
