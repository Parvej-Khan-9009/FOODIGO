import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"
import restaurantDataReducer from "./restaurantDataSlice"

const appStore = configureStore({
    reducer: {
        cart: cartReducer,
        restaurantData: restaurantDataReducer,
    }
});

export default appStore;