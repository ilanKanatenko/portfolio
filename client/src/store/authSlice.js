import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// createAsyncThunk({

// })

const authSlice = createSlice({
  name: "auth",
  initialState: { isAuth: false, email: "" },
  reducers: {
    authenticateUser(state, action) {
      state.isAuth = true;
      state.email = action.payload.email;
    },
  },
});

export const isAuth = (data) => {
  return async (dispatch) => {
    // console.log("isAuth reducer function", data);
    const response = await axios.get("/api/current_user");
    if (response.data) {
      dispatch(authenticateUser(response.data));
    }
  };
};

export const { authenticateUser } = authSlice.actions;
export default authSlice.reducer;
