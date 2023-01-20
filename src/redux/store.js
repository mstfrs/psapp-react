import { configureStore } from "@reduxjs/toolkit";
import langSlice from "./langSlice";

export default configureStore({
    reducer:{
        lang:langSlice,
    }
})