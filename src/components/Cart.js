import React, { useContext } from 'react'
import ItemContext from './ItemContext';


const Cart = () => {
    const crx=useContext(ItemContext);
    const items= crx.items.map((item)=><li><div>{item.title}</div><div>{item.price}</div><div><img src={item.imageUrl} alt='fetchingerror'></img></div><div>{item.amount}</div></li>)
    console.log(items.length);
   
  return   <div>
        <ul>     
       {items}
       {crx.totalAmount}
        </ul>

    </div>
  
}

export default Cart