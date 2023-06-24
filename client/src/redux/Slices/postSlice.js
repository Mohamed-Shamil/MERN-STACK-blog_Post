import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    title: "",
    subTitle: "",
    image:null,
    content: "",
    tags:[]
}

export const postSlice = createSlice( {
    name: "postDetails",
    initialState,
    reducers : {
        setDetails: (state,action) => {
            const {title,subTitle,image,content} = action.payload
            state.title = title !== undefined ? title: state.title
            state.subTitle = subTitle !== undefined ? subTitle: state.subTitle
            state.content = content !== undefined ? content: state.content
            state.image = image !== undefined ? image: state.image

        }
    }
})

export const {setDetails} = postSlice.actions;
export default postSlice.reducer;
export const postReducer = (state) => state.persistedReducer.postReducer