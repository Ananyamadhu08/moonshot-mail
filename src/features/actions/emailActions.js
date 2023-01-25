import { createAsyncThunk } from "@reduxjs/toolkit";
import { setLoading } from "../slices/emailSlice";

export const getEmails = createAsyncThunk(
  "email/getEmail",
  async ({ page }, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading({ loading: true }));

      const response = await fetch(
        `https://flipkart-email-mock.now.sh/?page=${page}`
      );

      thunkAPI.dispatch(setLoading({ loading: false }));

      if (response.ok) {
        let json = await response.json();

        return { emails: json.list };
      }
    } catch (e) {
      thunkAPI.dispatch(setLoading({ loading: false }));

      return thunkAPI.rejectWithValue(e.response.data.msg);
    }
  }
);
