import React, { Fragment, useContext} from 'react'
import ItemContext from './ItemContext'
import classes from './Product.module.css'


const Product = (props) => {
    const crx=useContext(ItemContext)

    const AddItemToCartHandler=()=>{   
        const item={...props.item,id:props.item.id,amount:1}
        
      crx.additem(item)
        
      }
  return<Fragment>
    
   <li  className={classes.item}><h2>{props.item.title}</h2><div><img src={props.item.imageUrl} alt="fetching Error"></img></div><div className={classes.infoblock}> <div>{props.item.price}Rs.</div><button onClick={AddItemToCartHandler} style={{backgroundColor:"green",color:"white",height:"1cm"}}>Add To Cart</button></div></li>
  
   </Fragment>
}

export default Product