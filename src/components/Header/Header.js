import React, { Fragment, useContext, useState} from 'react'
import CartButton from '../Cart/CartButton'
import classes from './Header.module.css'
import {Link} from 'react-router-dom'
import AuthContext from '../Authentication/AuthContext'
import Login from '../Authentication/Login'


const Header = () => {
  const authctx=useContext(AuthContext)
  const [login,Setlogin]=useState(false)
  const loginpageopener=()=>{
    Setlogin(true)
  }
  
   const loginpagecloser=()=>{
    Setlogin(false)
   }
 


  

  return <div className={classes.header}>
      <h1 className={classes.h}>MY GENERICS</h1>
<Link to="/Home" > <button className={classes.buton}>HOME</button>  </Link>
<Link to="/ContactUs" >   <button  className={classes.buton}>CONTACT</button></Link>
<Link to="/AboutUs" >  <button className={classes.buton}>ABOUT</button> </Link>
 <Link to="/products" >  <button className={classes.buton}>STORE</button> </Link>  
     
    <button className={classes.login} onClick={loginpageopener}>LOGIN</button>
      {authctx.token && <CartButton></CartButton>}
     {authctx.token&&<button  onClick={ authctx.logout} className={classes.logout}>LOGOUT</button>}

   {login&&<Login closepage={loginpagecloser}></Login>}
     
     </div>
   
 
    
  
}

export default Header