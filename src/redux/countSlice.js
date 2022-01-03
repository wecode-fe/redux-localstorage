import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
    name: "count",
    initialState: {
        count: Number(localStorage.getItem('count')) || 0,
    },
    reducers: {
        increase(state) {
            state.count += 1
            localStorage.setItem('count', state.count)
        },
        decrease(state) {
            state.count -= 1;
        },
        increaseByAmount(state, action) {
            state.count += action.payload
        }
    }
});

export const { increase, decrease, increaseByAmount } = countSlice.actions;
export default countSlice.reducer;
