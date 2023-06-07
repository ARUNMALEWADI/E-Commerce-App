import React, { Fragment, useState } from 'react'
import Cart from './Cart';


const CartButton = () => {
   const[showCart ,setCart]= useState(false)
   const ShowCartHandler=()=>{
    setCart(true)

   }
   const HideCartHandler=()=>{
    setCart(false)

   }
  return  <Fragment>
   <button onClick={ShowCartHandler}>Cart</button>
   {
    showCart&&<Cart closeCart={HideCartHandler}></Cart>
   }
   </Fragment>


}

export default CartButton