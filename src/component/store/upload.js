import {createSlice} from "@reduxjs/toolkit";

/* 영상 등록창 redux */

const initialState = {
    uploadModalVisible: false,
    uploadStep: 0,
    id: undefined
}

const upload = createSlice({
    name: 'upload',
    initialState: initialState,
    reducers: {
        setUploadModalVisible: (state, action) => ({
            ...state,
            uploadModalVisible: action.payload,
        }),
        uploadNextStep: (state, action) => ({
            ...state,
            uploadStep: state.loginStep++,
        }),
        uploadPrevStep: (state, action) => ({
            ...state,
            uploadStep: state.loginStep--,
        }),
        uploadResetStep: () => initialState,
        uploadUserInput: (state, { payload: { key, value } }) => ({
            ...state,
            [key]: value,
        })
    }
});


export const { setUploadModalVisible, uploadNextStep, uploadPrevStep, uploadResetStep, uploadUserInput } = upload.actions;
export default upload.reducer;