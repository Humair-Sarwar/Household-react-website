import { createSlice } from "@reduxjs/toolkit";

let UpdateSingleContactUsSlice = createSlice({
  name: 'UpdateContactUsSingle',
  initialState: '',
  reducers: {
    
    formDataUpdateSingle: (state, action)=>{
      return action.payload
    }
  },
  
});
export const UpdateSingleContactUsSliceActions = UpdateSingleContactUsSlice.actions;
export default UpdateSingleContactUsSlice;