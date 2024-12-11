import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const goitApi = axios.create({
  baseURL: "https://connections-api.goit.global/",
});

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      console.log("Sending request with credentials:", credentials);
      const response = await goitApi.post("/users/signup", credentials);
      console.log("Response data:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error message:", error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
