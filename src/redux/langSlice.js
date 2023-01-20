import { createSlice } from "@reduxjs/toolkit";

const langSlice=createSlice({
    name:"lang",
    initialState:{
        lang:"EN",
    },
    reducers:{
        changeLang:(state,action)=>{
            state.lang=action.payload
        }
    }

})
export const {changeLang}=langSlice.actions
export default langSlice.reducer;