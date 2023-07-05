import React, { Fragment, useContext, useState } from 'react'
import Cart from './Cart';
import ItemContext from '../Product/ItemContext';
import classes from './CartButton.module.css'


const CartButton = () => {
   const crx=useContext(ItemContext)
   const[showCart ,setCart]= useState(false)
   const ShowCartHandler=()=>{
    setCart(true)
    document.body.style.overflow = 'hidden';

   }
   const HideCartHandler=()=>{
    setCart(false)
    document.body.style.overflow = 'scroll';
   }
  return  <Fragment>
   <button onClick={ShowCartHandler} className={classes.cartbutton}>
    <section>CART</section>
   </button>
   { crx.items.length >0 && <section className={classes.notify}>{crx.items.length}</section>}
   {
    showCart&&<Cart closeCart={HideCartHandler}></Cart>
   }
   </Fragment>


}

export default CartButton