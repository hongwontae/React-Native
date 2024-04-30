import {configureStore} from '@reduxjs/toolkit';

import {CounterSlice} from './counter-redux'

const store = configureStore({
    reducer : CounterSlice.reducer
});

export default store;

export const CounterSliceAction = CounterSlice.actions;