import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { api } from "./slices/apiSlice";
import {post} from './slices/postSlice'

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  [post.reducerPath] : post.reducer
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware,post.middleware),
});

export default store;
