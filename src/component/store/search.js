import {createSlice} from "@reduxjs/toolkit";

/*

검색창 redux

현재 사용자가 선택하고 있는 검색 필터와,
검색어에 대한 정보를 리덕스를 이용한 전역 state로 관리하고자 함.

*/

const initialState = {
    content: "artist",
    artist: "a-default",
    music: "m-default",
    date: "yyyy-mm-dd",
}

const search = createSlice({
    name: 'search',
    initialState: initialState,
    reducers: {
        setContent: (state, action) => {
            return {
                ...state,
                content: action.payload,
            }
        },

        setArtist: (state, action) => {
            return {
                ...state,
                artist: action.payload,
            }
        },

        setMusic: (state, action) => {
            return {
                ...state,
                music: action.payload,
            }
        },

        setDate: (state, action) => {
            return {
                ...state,
                date: action.payload,
            }
        }
    }
});


export const { setContent, setArtist, setMusic, setDate } = search.actions;
export default search.reducer;