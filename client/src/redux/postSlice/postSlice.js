import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    auther: "",
    content: "",
}

export const postSlice = createSlice( {
    name: "postDetails",
    initialState,
    reducers : {
        setDetails: (state,action) => {
            console.log(action.payload,"action");
            const {auther,content} = action.payload
            state.auther = auther !== undefined ? auther: state.auther
            state.content = content !== undefined ? content: state.content
        }
    }
})

export const {setDetails} = postSlice.actions;
export default postSlice.reducer;
export const postReducer = (state) => state.persistReducer.postReducer