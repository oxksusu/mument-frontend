import {createSlice} from "@reduxjs/toolkit";

/* 로그인창 redux */

const initialState = {
    loginModalVisible: false,
    loginStep: 0,
    id: undefined
}

const login = createSlice({
    name: 'login',
    initialState: initialState,
    reducers: {
        setLoginModalVisible: (state, action) => ({
            ...state,
            loginModalVisible: action.payload,
        }),
        loginNextStep: (state, action) => ({
            ...state,
            loginStep: state.loginStep++,
        }),
        loginPrevStep: (state, action) => ({
            ...state,
            loginStep: state.loginStep--,
        }),
        loginResetStep: () => initialState,
        loginUserInput: (state, { payload: { key, value } }) => ({
            ...state,
            [key]: value,
        })
    }
});


export const { setLoginModalVisible, loginNextStep, loginPrevStep, loginResetStep, loginUserInput } = login.actions;
export default login.reducer;