import { configureStore, combineReducers } from "@reduxjs/toolkit";
import ModalSlice from "./slice/ModalSlice";

const rootReducer = combineReducers({
  modal: ModalSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
