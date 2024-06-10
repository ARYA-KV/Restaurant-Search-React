import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slice/productSlice";

const pStore=configureStore({
    reducer:{
        productReducer:productSlice
    }
})
export default pStore