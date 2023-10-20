// store.js
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { api } from './slices/apiSlice';
import counterReducer from './slices/CounterSlice';

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  counter: counterReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
