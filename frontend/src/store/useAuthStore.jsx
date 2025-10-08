import {create} from 'zustand';



export const useAuthStore = create((set)=>({
    authUser: {
        name:"johne doe",
        age:25,
        email:"johne.doe@gmail.com",
        _id:"1234567890"
    },

    isLoading : false,

   
 login :()=>{

    console.log("login");
 }
}))