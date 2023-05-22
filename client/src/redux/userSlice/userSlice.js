import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    id : "",
    name : "",
    email: "",
    accessToken : ""
};

export const userSlice = createSlice ({
    name: "userDetails",
    initialState,
    reducers: {
        setDetails : (state,action) => {
            console.log(action.payload, "action");
            const {_id,name,email,accessToken} = action.payload
            state._id = _id !== undefined ? _id : state._id;
            state.name = name !== undefined ? name : state.name;
            state.email = email !== undefined ? email : state.email;
            state.accessToken = accessToken !== undefined ? accessToken : state.accessToken;
        },
    }
})

export const {setDetails} = userSlice.actions;
export default userSlice.reducer;
export const userReducer = (state) => state.persisteReducer.userReducer;