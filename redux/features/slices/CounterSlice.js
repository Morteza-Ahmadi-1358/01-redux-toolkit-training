import { createSlice } from "@reduxjs/toolkit"

const INITIAL_STATE = {number: 0}

const CounterSlice = createSlice({
    name: 'CounterSlice',
    initialState: INITIAL_STATE,
    reducers: {
        increment: state => {state.number += 1},
        reset: state => {state.number = 0},
        decrement: state => {
            if (state.number > 0)
                state.number -= 1
            else
                state.number = 0
        },
        customIncrement: (state, action) => {state.number += action.payload},
        customDecrement: (state, action) => {
            if (action.payload <= state.number)
                state.number -= action.payload
            else
                state.number = state.number
        }
    }
})

export const { increment, reset, decrement, customIncrement, customDecrement} = CounterSlice.actions
export default CounterSlice.reducer