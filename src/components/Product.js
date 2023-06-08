import React, { Fragment, useContext} from 'react'
import ItemContext from './ItemContext'


const Product = (props) => {
    const crx=useContext(ItemContext)
    const AddItemToCartHandler=()=>{   
        const item={...props.item,id:props.id,amount:1}
      crx.additem(item)
        
      }
  return<Fragment>
   <li ><div>{props.item.title}</div><div>{props.item.price}Rs.</div><div><img src={props.item.imageUrl} alt="fetching Error"></img></div><div><button onClick={AddItemToCartHandler}>Add To Cart</button></div></li>
  
   </Fragment>
}

export default Product