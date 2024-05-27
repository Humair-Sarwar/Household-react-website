import { createSlice } from "@reduxjs/toolkit";


let JobFormSlice = createSlice({
  name: "jobFormDatas",
  initialState: [],
  reducers: {
    jobFormShowAllData: (state, action) => {
      let newAllFormData = [...state, action.payload];
      return newAllFormData;
    },
    jobFormDeleteData: (state, action) => {
      let deleteFilteredData = state.filter((data) => {
        return data.id !== action.payload;
      });
      return deleteFilteredData;
    },
    formDataUpdateSingle: (state, action) => {
      const { id, data } = action.payload;
      return state.map((item) => {
        if (item.id === id) {
          return {
            ...item, ...data,
          };
        }
        return item;
      });
    }
  },
});
export let JobFormSliceActions = JobFormSlice.actions;
export default JobFormSlice;
