import { createSlice } from "@reduxjs/toolkit";

let UpdatedMsgSlice = createSlice({
  name: 'success',
  initialState: false,
  reducers: {
    updatedMsgShow: (state)=>{
      return state = true;
    },
    updatedMsgHide: (state)=>{
      return state = false;
    }
  }
});
export const UpdatedMsgSliceActions = UpdatedMsgSlice.actions;
export default UpdatedMsgSlice;