import { configureStore } from "@reduxjs/toolkit";
import countSlice from "./countSlice";
import darkSlice from "./darkSlice";

const store = configureStore({
    reducer: {
        count: countSlice,
        dark: darkSlice
    }
});

export default store;