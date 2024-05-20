import { createSlice } from "@reduxjs/toolkit";

let ViewSingleContactUsSlice = createSlice({
  name: 'ViewContactUsSingle',
  initialState: '',
  reducers: {
    formDataViewSingle: (state, action)=>{
      return action.payload
    }
  },
  
});
export const ViewSingleContactUsSliceActions = ViewSingleContactUsSlice.actions;
export default ViewSingleContactUsSlice;