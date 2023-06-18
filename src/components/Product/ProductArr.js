import React, { Fragment, useContext } from 'react'
import Product from './Product'
import classes from './ProductArr.module.css'
import AuthContext from '../Authentication/AuthContext'
const productsArr = [

    {
    
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    id:Math.random()
    
    },
    
    {
    
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    id:Math.random()
    
    },
    
    {
    
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    id:Math.random()
    
    },
    
    {
    
    title: 'Blue Color',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    id:Math.random()
    
    }
    
    ]
        

const ProductArr = () => {

         const authctx=useContext(AuthContext)
  return <Fragment >
    <h1 className={classes.welcome}>Welcome to the Generics Store</h1>
   {authctx.islogin&&<div>
    <h1 className={classes.head}>MUSIC</h1>
  <ul className={classes.ul}>
{
    productsArr.map((item)=><Product key={item.title} item={item} ></Product>)
}
    </ul>
    </div>
  }
  {!authctx.islogin&&<div style={{margin:'5cm',fontSize:"xxx-large"}}>
    Please SignIn to get acess to store.....
    </div>}
  </Fragment>
}

export default ProductArr