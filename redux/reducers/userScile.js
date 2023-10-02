import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userData: {},
  },
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    clearUser: (state) => {
      state.userData = {};
    },
  },
});

export const { setUserData, clearUser } = userSlice.actions;

export const selectUser = (state) => state.user.userData;

export default userSlice.reducer;
