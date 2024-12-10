import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const goitApi = axios.create({
  baseUrl: "https://connections-api.goit.global/",
});

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const response = await goitApi.post("/users/signup", credentials);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
