import {createAction, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {server} from "../../service/Server";
import authApi from "../../service/AuthAPI";

/*

< user >
작성자 : sierrah

사용자 정보 저장용 redux
createSlice 를 통해 전역 user state 를 생성하고,
createAsyncThunk 를 통해 user state 를 업데이트합니다.

 * 아이디로 user 찾기
 * refresh token 으로 user 찾기
 * 연동시 닉네임 설정하고 중복 불가능하게 + 닉네임 변경할 수 있게

< 필요한 API >
- 최초 가입인 경우 닉네임과 프로필 사진 설정 : setAccountInfo
- 로그인 요청이 오면 access token 받아오기
- access token

*/

// action 선언
// createAction('타입')

const fetchByIdAction = createAction('account/fetchById');
const fetchByRefreshTokenAction = createAction('account/fetchAccountByRefreshToken');
const accountSignupAction = createAction('account/accountSignup');
const modifyAccountInfoAction = createAction('account/modifyAccountInfo');

/* 초기 상태 설정 */
const initialState = {
    id: undefined, //이메일
    accountName: undefined,
    picture: undefined,
}

/* 소셜 로그인 후 access token 을 받아와 헤더에 설정 + 로그인 성공 유무 반환 -> data 는 request */
const fetchAccountById = createAsyncThunk(fetchByIdAction, async (data, thunkAPI) => {
    const res = await authApi.login(data);
    // 가입된 유저일 경우에만
    if (res.data.loginSuccess) {
        server.defaults.headers.common['Authorization'] = res.headers.Authorization;
    }
    return res.data.account; // 헤더에 accessToken 달아 정보를 요청 -> 여기 말고 다른 API 에서 또 불러야 할 일 많으니까..

    // 로그인 성공했으면 알아서 api 상에서 헤더에 refresh, access 달아놨을 것
    // 백에서 쿠키를 조회하는 건 재발급 상황 외에는 없음, 항상 access 를 조회
});

const accountSignup = createAsyncThunk(accountSignupAction, async (accountInfo, thunkAPI) => {
    const res = await authApi.signup(accountInfo);
    server.defaults.headers.common['Authorization'] = res.headers.Authorization;
    return res.data;
});

const fetchByRefreshToken = createAsyncThunk(fetchByRefreshTokenAction, async (email, thunkAPI) => {
    const res = await authApi.refresh(email);
    server.defaults.headers.common['Authorization'] = res.headers.Authorization;
    return res.data;
    });

const modifyAccountInfo = createAsyncThunk(modifyAccountInfoAction, async (modifyData, {rejectWithValue}) => {
   const res = await authApi.modifyInfo(modifyData);

   if (res.modifySuccess) {
       server.defaults.headers.common['Authorization'] = res.headers.Authorization;
   } else { return rejectWithValue(res.modifySuccess); }

   return res.data;
});

/* account 라는 이름의 전역 state store 가 생긴거라고 생각. initial state 대로 불러오면 */
const accountSlice = createSlice(({
    name: "account",
    initialState,
    reducers:{
        setAccount: (state, { payload: {key, value} }) => ({
            ...state,
            [key]: value,
        }),
        clearAccount: (state) => initialState,
    },
    extraReducers: {
        [accountSignup.fulfilled]: (state, { payload }) => ({
            ...state,
            id: payload.email,
            accountName: payload.accountName,
            picture: payload.picture,
        }),
        [fetchAccountById.fulfilled]: (state, { payload }) => ({
            ...state,
            id: payload.email,
            accountName: payload.accountName,
            picture: payload.picture,
        }),
        [fetchByRefreshToken.fulfilled]: (state, { payload }) => ({
            ...state,
            id: payload.email,
            accountName: payload.accountName,
            picture: payload.picture,
        }),
        [modifyAccountInfo.fulfilled]: (state, { payload }) => ({
            ...state,
            id: payload.email,
            accountName: payload.accountName,
            picture: payload.picture,
        }),
        // 오류처리
        [accountSignup.rejected]: (state, { payload }) => ({
            // payload 에 오류 정보 담겨올
        }),

    }
}))

export const { setAccount, clearAccount } = accountSlice.actions;
export { fetchAccountById, fetchByRefreshToken, accountSignup, modifyAccountInfo };
export default accountSlice.reducer;