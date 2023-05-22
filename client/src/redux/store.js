import { combineReducers, configureStore} from '@reduxjs/toolkit'
// import  Storage  from 'redux-persist/lib/storage'
import {persistReducer } from 'redux-persist'
import  userReducer  from './userSlice/userSlice'
import  postReducer  from './postSlice/postSlice'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage
}

const reducers = combineReducers({
    userReducer,
    postReducer
})

const persisteReducer = persistReducer( persistConfig, reducers)

export const store = configureStore ({
    reducer: {
        persisteReducer
    },
    middleware: []
})