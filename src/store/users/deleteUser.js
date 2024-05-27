import { createSlice } from "@reduxjs/toolkit";

let deleteSingleUserSlice = createSlice({
  name: 'deleteUserId',
  initialState: '',
  reducers: {
    deleteSingleUser: (state, action)=>{
      return action.payload;
    }
  }
});
export const deleteSingleUserSliceActions = deleteSingleUserSlice.actions;
export default deleteSingleUserSlice;