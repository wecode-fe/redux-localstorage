import { createSlice } from "@reduxjs/toolkit";

const darkSlice = createSlice({
    name: 'dark',
    initialState: {
        isDark: localStorage.getItem('dark') === 'true' || false
    },
    reducers: {
        toggleDark(state) {
            state.isDark = !state.isDark
            localStorage.setItem('dark', state.isDark)
        }
    }
});

export const { toggleDark } = darkSlice.actions;
export default darkSlice.reducer