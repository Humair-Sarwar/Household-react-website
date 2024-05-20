import { createSlice } from "@reduxjs/toolkit";

let deleteSingleContactUsSlice = createSlice({
  name: 'deleteContactUsSingle',
  initialState: '',
  reducers: {
    formDataDeleteSingle: (state, action)=>{
      return action.payload;
    }
  }
});
export const deleteSingleContactUsSliceActions = deleteSingleContactUsSlice.actions;
export default deleteSingleContactUsSlice;