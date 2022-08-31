import {createSlice} from "@reduxjs/toolkit";

/*

로그인창 redux
로그인 단계에 따라 loginStep 을 증감시키는 리덕스입니다.

*/

const initialState = {
    loginModalVisible: false,
    loginStep: 1,
    email: undefined,
    accountName: undefined,
    picture: undefined,
    kakaoAccessToken: undefined,
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
            loginStep: state.loginStep + 1,
        }),
        loginPrevStep: (state, action) => ({
            ...state,
            loginStep: state.loginStep - 1,
        }),
        loginResetStep: () => initialState,
        setSignup: (state, { payload: { key, value } }) => ({
            ...state,
            [key]: value,
        })
    }
});


export const { setLoginModalVisible, loginNextStep, loginPrevStep, loginResetStep, setSignup } = login.actions;
export default login.reducer;