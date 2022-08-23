import {createAction} from "@reduxjs/toolkit";

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
const sendKakaoCodeAction = createAction('user/sendKakaoCode');

const fetchUserByIdAction = createAction('user/fetchById');
const fetchUserByRefreshTokenAction = createAction('user/fetchUserByRefreshToken');
const addUserNicknameAction = createAction('user/addUserNickname');
const modifyUserInfoAction = createAction('user/modifyUserInfo');

/*
sendKakaoCode
백으로 인가 코드를 보내주고,
*/