//Create user Slice :

import { createSlice } from "@reduxjs/toolkit";

import { userData } from "../userData";


export const userSlice = createSlice({
    name : "users",
    initialState : {value : userData},
    reducers :{
        //actions to be performed on your state. (user)
        addUser : ()=>{

        },
        deleteUser : ()=>{

        },
        updateUser:()=>{

        }
    }
});

export const {addUser,deleteUser,updateUser} = userSlice.actions;
export default userSlice.reducer;
