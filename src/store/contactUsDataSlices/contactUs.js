import { createSlice } from "@reduxjs/toolkit";

let contactUsSlice = createSlice({
  name: 'contactUsData',
  initialState: [],
  reducers: {
    formDataShowAll: (state, action)=>{
      let data = [...state, action.payload];
      return data
    },
    formDataUpdateSingle: (state, action)=>{
      let {viewDataContact, formData} = action.payload;
      state[viewDataContact] = formData;
      
      
    },
    formDataDeleteSingle: (state, action)=>{
      let filterContactFormData = state.filter((data, index)=>index != action.payload);
      return filterContactFormData;
    },
    

  }
});
export const contactUsSliceActions = contactUsSlice.actions;
export default contactUsSlice;