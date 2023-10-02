// src/reducers/itemSlice.js
import { createSlice } from '@reduxjs/toolkit';

const itemSlice = createSlice({
  name: 'item',
  initialState: {
    selectedItem: 'Your Current Location',
  },
  reducers: {
    setSelectedItem: (state, action) => {
      state.selectedItem = action.payload;
    },
    setSelectedTitle: (state, action) =>{
       state.selectedTitle = action.payload;
    }
    
  
  },
});

export const { setSelectedItem,setSelectedTitle } = itemSlice.actions;
export default itemSlice.reducer;
