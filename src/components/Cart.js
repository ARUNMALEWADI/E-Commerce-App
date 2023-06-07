import React from 'react'
const cartElements = [

    {
    
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    quantity: 2,
    
    },
    
    {
    
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    quantity: 3,
    
    },
    
    {
    
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    quantity: 1,
    
    }
    
    ]

const Cart = () => {
    const items= cartElements.map((item)=><li><div>{item.title}</div><div>{item.price}</div><div><img src={item.imageUrl} alt='fetchingerror'></img></div><div>{item.quantity}</div></li>)
    console.log(items);
  return   <div>
        <ul>     
       {items}
        </ul>

    </div>
  
}

export default Cart