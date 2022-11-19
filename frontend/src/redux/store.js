import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
// import authReducer from "./slices/authSlice"

const rootReducer = combineReducers({
  // auth: authReducer,
})


const store = configureStore({
  reducer: {
    rootReducer,
    cart: cartSlice,
  },
});
export default store;
