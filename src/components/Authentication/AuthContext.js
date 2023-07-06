import { createContext, useState } from "react";
import React from "react";


const AuthContext=React.createContext({token:'',
islogin:false,
email:"",
login:(token)=>{},
logout:()=>{}
})
export const AuthContextProvider = (props) => {
    const initial=localStorage.getItem('token')
    const initialemail=localStorage.getItem('email')
      const[token,setToken]=useState(initial)
      const [email,setEmail]=useState(initialemail)
  
      const UserIsloggedin=!!token;
  
      const loginHandler=(token,email)=>{
        localStorage.setItem('token',token)
        localStorage.setItem('email',email)
              setToken(token)
              setEmail(email)
            
            //   setTimeout(()=>{localStorage.removeItem('token')
            // },10000)
      }
      const logoutHandler=()=>{
   
          setToken(null)
          setEmail(null)
          localStorage.removeItem('token')
          localStorage.removeItem('email')
          
      }
     
      const helper={
          token:token,
          email:email,
          islogin:UserIsloggedin,
          login:loginHandler,
          logout:logoutHandler
      }
    return <AuthContext.Provider value={helper}>
      {props.children}
    </AuthContext.Provider>
  }
export default AuthContext;