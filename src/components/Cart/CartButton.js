import React, { Fragment, useContext, useState } from 'react'
import Cart from './Cart';
import ItemContext from '../Product/ItemContext';
import classes from './CartButton.module.css'
import AuthContext from '../Authentication/AuthContext';

const CartButton = () => {
   const crx=useContext(ItemContext)
   const authctx=useContext(AuthContext);
   const[showCart ,setCart]= useState(false)
   console.log(crx);
   const ShowCartHandler=()=>{
    setCart(true)
    document.body.style.overflow = 'hidden';

   }
   const HideCartHandler=()=>{
    setCart(false)
    document.body.style.overflow = 'scroll';
   }
   const PutDataHandler=async()=>{
      const response=await fetch(`https://ecommerce-abc49-default-rtdb.firebaseio.com/${authctx.email}.json`,{method:"PUT",body:JSON.stringify({items:crx.items,totalamount:crx.totalAmount}),headers:{"Content-Type":"application/json"}})
      const data=await response.json()
    // const dataitems=  data.items.map(
    //     (item)=><li className={classes.list}><div><img  className={classes.img} src={item.imageUrl} alt='fetchingerror'></img></div><div className={classes.title}>{item.title}</div> <div>{item.price}Rs.</div> <div>x{item.amount}</div><div><button onClick={IncreaseAmount.bind(null,item)}>+</button><button onClick={DecreaseAmount.bind(null,item.id)}>-</button></div></li>)
   
   
     }
     if(crx.items.length)
      PutDataHandler()

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