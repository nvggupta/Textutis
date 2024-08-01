import { configureStore } from "@reduxjs/toolkit";
import textSlice from "../Features/TextSlice"
export const store = configureStore({
    reducer:{
        Text : textSlice
    }
})

export default store;