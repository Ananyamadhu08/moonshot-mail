import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import emailReducer from "../features/slices/emailSlice";

const reducers = combineReducers({
  emails: emailReducer,
});

//MIDDLEWARE
const localStorageMiddleware = ({ getState }) => {
  return (next) => (action) => {
    const result = next(action);

    const state = getState();

    localStorage.setItem(
      "readEmailIds",
      JSON.stringify(state.emails.readEmailIds)
    );
    localStorage.setItem(
      "favoriteEmailIds",
      JSON.stringify(state.emails.favoriteEmailIds)
    );
    // localStorage.setItem("applicationState", JSON.stringify(getState()));
    return result;
  };
};

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});
