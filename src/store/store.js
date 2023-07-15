import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./reducers/BooksSlice";
import authenticationReducer from "./reducers/authenticationSlice";

const store = configureStore({
  reducer: {
    booksReducer: booksReducer,
    authentication: authenticationReducer,
  },
});

export default store;
