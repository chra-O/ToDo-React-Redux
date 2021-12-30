import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./slice";

 const store =configureStore({
  reducer: {
    todo: todoSlice,
  },
});
export default store