import React, { useContext } from 'react'
import ItemContext from '../Product/ItemContext';
import classes from './Cart.module.css'
import Modal from '../Modal/Modal';


const Cart = (props) => {

    const crx=useContext(ItemContext);
  const IncreaseAmount=(item)=>{
    crx.additem({...item,amount:1});

  }
  const DecreaseAmount=(id)=>{
    crx.removeitem(id)
  }
  const Purchase=()=>{
    if(crx.items.length<=0)
     { alert("Please add items to purchase")
      props.closeCart()
  }
      else{
   props.closeCart()
  alert("Items purchased")
  crx.clear();
      }
  }
    const items= crx.items.map(
      (item)=><li className={classes.list}><div><img  className={classes.img} src={item.imageUrl} alt='fetchingerror'></img></div><div className={classes.title}>{item.title}</div> <div>{item.price}Rs.</div> <div>x{item.amount}</div><div><button onClick={IncreaseAmount.bind(null,item)}>+</button><button onClick={DecreaseAmount.bind(null,item.id)}>-</button></div></li>)
 
   
  return  <Modal close={props.closeCart}>
    <div className={classes.cart} >
    <ul  >
        <div className={classes.headers}><div>Item</div></div>     
   {items}
   <div className={classes.totalamount}>
  { crx.totalAmount>0&& <div>Total Amount:{crx.totalAmount}Rs.</div>}
   </div>
    </ul>
    <button onClick={props.closeCart} className={classes.close}>Close</button>
   <button className={classes.purchase} onClick={Purchase}>Purchase</button>

    </div>
</Modal>
  
}
export default Cart