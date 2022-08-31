import {combineReducers} from "@reduxjs/toolkit";

import login from './login';
import search from "./search";
import upload from "./upload";
import account from "./account";

const rootReducer = combineReducers({
    login,
    search,
    upload,
    account,
})

export default rootReducer;