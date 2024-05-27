import { createSlice } from "@reduxjs/toolkit";

let updateUserSlice = createSlice({
  name: 'updateUser',
  initialState: '',
  reducers: {
    getUserUpdateId: (state, action)=>{
      return action.payload;
    }
  }
});
export const updateUserSliceActions = updateUserSlice.actions;
export default updateUserSlice;