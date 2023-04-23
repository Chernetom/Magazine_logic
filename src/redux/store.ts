import {configureStore} from "@reduxjs/toolkit";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";

let store = configureStore({
    reducer: {
        catalog: productReducer,
        cart :cartReducer
    }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;