import {combineReducers} from "@reduxjs/toolkit";

import login from './login';
import search from "./search";
import upload from "./upload";

const rootReducer = combineReducers({
    login,
    search,
    upload,
})

export default rootReducer;