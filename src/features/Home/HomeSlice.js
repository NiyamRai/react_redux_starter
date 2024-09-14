import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const InitialState = {
  homeData: null,
  isLoadingHome: false,
};

const HomeSlice = createSlice({
  name: "home",
  initialState: InitialState,
});

export default HomeSlice.reducer;
