import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
         value: "",
        "Nummber-of-words" : 0,
        "Number of charecters" : 0
    }
]

export const textSlice = createSlice({
    name : "Text",
    initialState,
    reducers:{
        setText : (state , action)=>{
            state[0].value = action.payload;
        },
        upperCase : (state)=>{
                state[0].value = state[0].value.toUpperCase();
        },
        lowerCase: (state)=>{
                state[0].value = state[0].value.toLowerCase();
        },
        reset: (state)=>{
            state[0].value = ""
        },
        copy:{

        },
        extraSpaces:(state)=>{
            state[0].value = state[0].value.trim(); 
        }
    }
})

export const {upperCase , lowerCase , reset , copy , extraSpaces , setText} = textSlice.actions;
export default textSlice.reducer;