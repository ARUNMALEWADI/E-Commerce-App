import React, { Fragment, useContext, useRef, useState } from 'react'
import classes from './Login.module.css'
import AuthContext from './AuthContext'

const Login = () => {
    const authctx=useContext(AuthContext)
    const [Login,Setlogin]=useState(true)
    const [IsLoading,SetLoading]=useState(false)
    const emailref=useRef();
    const passwordref=useRef();
 
    const SubmitHandler=(e)=>{
        e.preventDefault();
        const enteredemail=emailref.current.value;
        const enteredPassword=passwordref.current.value;
        let url=''
       
        
        SetLoading(true)
        if(Login)
        {
            url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDcUqQ66G8EiZOuhFm7JV1ZvG598pj77V4'
        }
        else
        {  
            url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDcUqQ66G8EiZOuhFm7JV1ZvG598pj77V4'
         }
        fetch(url,{method:'POST',body:JSON.stringify({email:enteredemail,
        password:enteredPassword,
    returnSecureToken:true}),headers:{'Content-Type':'authentication/json'}}).then(response=>{
      SetLoading(false)
        if(response.ok)
            {  
            alert("Authentication sucessfull")
         return response.json() 
        }
       else{
          return response.json().then(data=>{
          
             throw new Error(data.error.message)
         })
       }
     }).then((data)=>{ 
        authctx.login(data.idToken)
     }).catch((err)=>{  
        alert(err.message);})

    }


    const x=()=>{
        if(Login)
         Setlogin(false)
         else
         Setlogin(true)
    }
  return<Fragment>
    <section className={classes.login}>
    <header className={classes.logo}>{Login?'Login':'Sign Up'}</header>
     <form onSubmit={SubmitHandler} className={classes.control}>
    <label className={classes.label}>Email</label>
    <input type='email' required ref={emailref}></input>
    <label >Password</label>
    <input type='password' required ref={passwordref}></input>
    <div className={classes.actions}>  
    <button type='submit' >{Login?'Login':'Sign Up'}</button>
    {IsLoading &&<p> Sending Request.....</p>}
    <button onClick={x}  type='button' className={classes.toggle}>{Login?'create new account':'Sign in with existing account'}</button>
    </div>
    

   </form>
   
   </section>


   </Fragment>
}

export default Login