import { createSlice } from "@reduxjs/toolkit";

let AddNewUserMsgSlice = createSlice({
  name: 'addNewUser',
  initialState: false,
  reducers: {
    addMsgShow: (state)=>{
      return state = true;
    },
    addMsgHide: (state)=>{
      return state = false;
    }
  }
});
export const AddNewUserMsgSliceActions = AddNewUserMsgSlice.actions;
export default AddNewUserMsgSlice;