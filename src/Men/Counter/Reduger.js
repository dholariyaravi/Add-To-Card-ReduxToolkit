import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    value  : 0, 
}



const Reduger = createSlice({
    name : 'counter',
    initialState,
    reducers : {
    
        increment  : (state) => {
            state.value += 1;
        },

        decrement : (state) => {
            if (state.value > 0 ){
                state.value -= 1;
            }    
        },
        modual : (state) => {
            state.value *= 2 ;
        },
        incrementbyamount :  (state, actions) => {
            state.value += parseInt(actions.payload);
        },
    },

});

export const {increment,decrement,modual,incrementbyamount } = Reduger.actions

export default Reduger.reducer
