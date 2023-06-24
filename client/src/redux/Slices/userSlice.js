import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    id : "",
    name : "",
    email: "",
    bio:"",
    accessToken : ""
};

export const userSlice = createSlice ({
    name: "userDetails",
    initialState,
    reducers: {
        setDetails : (state,action) => {
            const {id,name,email,bio,accessToken} = action.payload
            state.id = id !== undefined ? id : state.id;
            state.name = name !== undefined ? name : state.name;
            state.email = email !== undefined ? email : state.email;
            state.bio = email !== undefined ? bio : state.bio;
            state.accessToken = accessToken !== undefined ? accessToken : state.accessToken;
        },
        resetDetails:(state) => {
            state.userId = ""
            state.name = ""
            state.email = ""
            state.accessToken = ""
          }
    }
})




export const {setDetails,resetDetails} = userSlice.actions;
export default userSlice.reducer;
export const userReducer = (state) => state.persistedReducer.userReducer;