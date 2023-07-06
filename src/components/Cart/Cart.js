import React, { useContext, useState } from 'react'
import ItemContext from '../Product/ItemContext';
import classes from './Cart.module.css'
import Modal from '../Modal/Modal';
import AuthContext from '../Authentication/AuthContext';


const Cart = (props) => {

    const crx=useContext(ItemContext);
const authctx=useContext(AuthContext)
  const IncreaseAmount=(item)=>{
    crx.additem({...item,amount:1});

  }
  const DecreaseAmount=(id)=>{
    crx.removeitem(id)
  }
  const Purchase= ()=>{
    if(crx.items.length<=0)
     { alert("Please add items to purchase")
      props.closeCart()
  }
      else{
   props.closeCart()
  alert("Items purchased")
  const deletedata=async()=>{
    const response=await fetch(`https://ecommerce-abc49-default-rtdb.firebaseio.com/${authctx.email}.json`,{method:"DELETE",headers:{"Content-Type":"application/json"}})
  }
  deletedata()
  crx.clear();
      }
  }

     const items= crx.items.map(
     (item)=><li className={classes.list}><div><img  className={classes.img} src={item.imageUrl} alt='fetchingerror'></img></div><div className={classes.title}>{item.title}</div> <div>{item.price}Rs.</div> <div>x{item.amount}</div><div><button onClick={IncreaseAmount.bind(null,item)}>+</button><button onClick={DecreaseAmount.bind(null,item.id)}>-</button></div></li>)
 
  

  return  <Modal close={props.closeCart}>
    <div className={classes.cart} >
    <div className={classes.headers}><div>ITEMS</div></div>     
    <ul style={{overflow:'scroll',height:'6.5cm'}}>
        
   {items}
  
    </ul>
    { crx.totalAmount>0 && <div className={classes.totalamount}>Total Amount:{crx.totalAmount}Rs.</div>}
    <button onClick={props.closeCart} className={classes.close}>Close</button>
   <button className={classes.purchase} onClick={Purchase}>Purchase</button>

    </div>
</Modal>
  
}
export default Cart