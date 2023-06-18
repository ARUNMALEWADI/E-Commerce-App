import React, { Fragment, useContext} from 'react'
import CartButton from '../Cart/CartButton'
import classes from './Header.module.css'
import {Link} from 'react-router-dom'
import AuthContext from '../Authentication/AuthContext'


const Header = () => {
  const authctx=useContext(AuthContext)
   
 


  

  return <Fragment>
    <div className={classes.header}>
      <h1 className={classes.h}>MY GENERICS</h1>
<Link to="/Home" > <button className={classes.buton}>HOME</button>  </Link>
<Link to="/ContactUs" >   <button  className={classes.buton}>CONTACT</button></Link>
<Link to="/AboutUs" >  <button className={classes.buton}>ABOUT</button> </Link>
 <Link to="/products" >  <button className={classes.buton}>STORE</button> </Link>  
     
      <Link to="/Login" ><button className={classes.login}>LOGIN</button></Link>
      {authctx.token && <CartButton></CartButton>}
     {authctx.token&&<Link  to="/Login" onClick={ authctx.logout} ><button className={classes.logout}>LOGOUT</button> </Link>}


     
     </div>
   
  </Fragment>
    
  
}

export default Header