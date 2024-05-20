import { createSlice } from "@reduxjs/toolkit";

let SuccessMsgSlice = createSlice({
  name: 'success',
  initialState: false,
  reducers: {
    successMsgShow: (state)=>{
      return state = true;
    },
    successMsgHide: (state)=>{
      return state = false;
    }
  }
});
export const SuccessMsgActions = SuccessMsgSlice.actions;
export default SuccessMsgSlice;