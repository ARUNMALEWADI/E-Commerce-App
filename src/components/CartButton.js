import React, { Fragment, useContext, useState } from 'react'
import Cart from './Cart';
import ItemContext from './ItemContext';


const CartButton = () => {
   const crx=useContext(ItemContext)
   const[showCart ,setCart]= useState(false)
   const ShowCartHandler=()=>{
    setCart(true)

   }
   const HideCartHandler=()=>{
    setCart(false)

   }
  return  <Fragment>
   <button onClick={ShowCartHandler}>
    <section>Cart</section>
    <section>{crx.items.length}</section>
   </button>
   {
    showCart&&<Cart closeCart={HideCartHandler}></Cart>
   }
   </Fragment>


}

export default CartButton