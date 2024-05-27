import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

let DEFAULT_USER = [{
  id: v4(),
  userName: 'Humair',
  password: 12345
}]
let usersSlice = createSlice({
  name: 'users',
  initialState: DEFAULT_USER,
  reducers: {
    showAllUsers: (state, action)=>{
      let newUser = [...state, action.payload];
      return newUser
    },
    deleteUser: (state, action)=>{
      let users = state.filter((data)=>data.id != action.payload);
      return users
    },
    updateUserData: (state, action)=>{
      let {id, userData} = action.payload;
      return state.map((user)=>{
        if(user.id == id){
          return {...user, ...userData}
        }
        return user;
      }
    )
    }
  }
})

export const usersSliceActions = usersSlice.actions;
export default usersSlice;