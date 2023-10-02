// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import itemReducer from '../reducers/itemSlice';
import userReducer from '../reducers/userScile';
const store = configureStore({
  reducer: {
    item: itemReducer,
    user: userReducer,
  },
});

export default store;
