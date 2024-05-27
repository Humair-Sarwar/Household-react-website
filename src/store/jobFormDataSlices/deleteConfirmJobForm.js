import { createSlice } from "@reduxjs/toolkit";

let deleteSingleJobFormSlice = createSlice({
  name: 'deleteJobFormSingle',
  initialState: '',
  reducers: {
    jobformDataDeleteSingle: (state, action)=>{
      return action.payload;
    }
  }
});
export const deleteSingleJobFormSliceActions = deleteSingleJobFormSlice.actions;
export default deleteSingleJobFormSlice;