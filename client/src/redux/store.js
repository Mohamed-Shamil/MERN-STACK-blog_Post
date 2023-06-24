import { combineReducers, configureStore} from '@reduxjs/toolkit'
import {persistReducer } from 'redux-persist'
import logger from 'redux-logger';
import  userReducer  from './Slices/userSlice'
import  postReducer  from './Slices/postSlice'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage
}

const reducers = combineReducers({
    userReducer,
    postReducer
})

console.log("user reducer data is here", userReducer)

const persistedReducer = persistReducer( persistConfig, reducers)

export const store = configureStore ({
    reducer: {
         persistedReducer
    },
    middleware: [logger]
})