import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./features/slices/CounterSlice";

export const Store = configureStore({
    reducer: {
        cnt: CounterSlice
    }
})