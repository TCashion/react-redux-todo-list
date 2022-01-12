import { configureStore } from "@reduxjs/toolkit";
import listReducer from "../components/listSlice";

// the root reducer here provides the initial state for the store
export default configureStore({
  reducer: {
    list: listReducer,
  },
});
