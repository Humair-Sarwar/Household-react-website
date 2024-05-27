import { createSlice } from "@reduxjs/toolkit";

let showUsernameSlice = createSlice({
  name: 'showUsername',
  initialState: 'D',
  reducers: {
    showUsername: (state, action)=>{
      return action.payload
    }
  }
})

export let showUsernameSliceActions = showUsernameSlice.actions;
export default showUsernameSlice;