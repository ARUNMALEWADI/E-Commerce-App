import React, { Fragment, useContext, useState,useEffect } from 'react'
import Product from './Product'
import classes from './ProductArr.module.css'
import AuthContext from '../Authentication/AuthContext'
import ProductsProvider from './ProductsProvider'
import CartButton from '../Cart/CartButton'
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

 let Style={overflow:"disabled",position:"fixed"}
         const authctx=useContext(AuthContext)
         if(authctx.islogin)
           {Style={position:"relative",overflow:"hidden",width:"100%",height:"100%"}
               
           }







           const [Data,SetData]=useState(null)
         
           
           useEffect(()=>{
             const PutDataHandler=async()=>{
               const response=await fetch(`https://ecommerce-abc49-default-rtdb.firebaseio.com/${authctx.email}.json`,{method:"GET",headers:{"Content-Type":"application/json"}})
               const data=await response.json()
               console.log(data);
               let c=[]
               let amount=0;
               if(data)
               {  for(const key in data.items)
                 { c.push({amount:data.items[key].amount,id:data.items[key].id,imageUrl:data.items[key].imageUrl,price:data.items[key].price,title:data.items[key].title});
                 }
                 for(const key in data)
                 {
                   amount=Number(data[key])
                 }
                SetData({items:c,totalAmount:amount})
               }
               else
               {  SetData({items:[],totalAmount:0})
         
               }
         
           
              }
              if(authctx.email)
               PutDataHandler()},[authctx.islogin])
         
          document.body.style.overflowX="hidden"
  return <Fragment >
    <div style={Style}>
    <h1 className={classes.welcome}>Welcome to the Generics Store</h1>

    {!authctx.islogin&&<div style={{margin:'4cm',fontSize:"xxx-large"}}>
    Please Signin/Signup to get acess to store.....
    </div>}

   {authctx.islogin&&<div>
    { Data && <ProductsProvider items={Data.items} totalAmount={Data.totalAmount} >
      
    {authctx.token && <CartButton></CartButton>}
    <h1 className={classes.head}>MUSIC</h1>
  <ul className={classes.ul}>
{
    productsArr.map((item)=><Product key={item.title} item={item} ></Product>)
}
    </ul>
    </ProductsProvider>
}
    </div>
  }

    </div>
  </Fragment>
}

export default ProductArr