import { configureStore, createSlice } from '@reduxjs/toolkit';

const graphSlice = createSlice({
    name: 'graph',
    // initialState: { 0: [], 1: [], 2: [] },
    initialState: { 0: [] },
    reducers: {
        update: (state, action) => {
            state[0] = [...action.payload[0]];
            // state[1] = [...action.payload[1]];
            // state[2] = [...action.payload[2]];
        },
        add: (state, action) => {
            state[Object.keys(state).length] = action.payload;
        },
    },
});

const store = configureStore({
    reducer: {
        graph: graphSlice.reducer,
    },
});

export const graphAction = graphSlice.actions;
export default store;
