import { createSlice } from "@reduxjs/toolkit";

/* 로그인창 redux */

const initialState = {
    modalVisible: false,
    loginStep: 0,
    id: undefined
}

const loginSlice = createSlice({
    name: 'login',
    loginState: initialState,
    reducers: {
        setModalVisible: (state, action) => ({
            ...state,
            modalVisible: action.payload,
        }),
        nextStep: (state, action) => ({
            ...this.state,
            loginStep: state.loginStep + 1,
        }),
        prevStep: (state, action) => ({
            ...this.state,
            loginStep: state.loginStep - 1,
        }),
        resetStep: () => initialState,
        userInput: (state, { payload: { key, value } }) => ({
            ...state,
            [key]: value,
        })
    }
});

export const { setModalVisible, nextStep, prevStep, resetStep, userInput } = loginSlice.actions;
export default loginSlice.reducer;