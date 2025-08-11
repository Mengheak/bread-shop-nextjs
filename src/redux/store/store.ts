import { configureStore } from "@reduxjs/toolkit";
import productFilter from "../slices/filterProductSlice"
export const store = configureStore({
    reducer: {
        productFilter
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch