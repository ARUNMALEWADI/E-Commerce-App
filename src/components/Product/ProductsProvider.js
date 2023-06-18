import React, { useReducer } from 'react'
import ItemContext from './ItemContext';

const defaultState={
  items:[],
  totalAmount:0
}

const CartReducer=(state,action)=>{
if(action.type==='ADD')
{  const UpdatedTotalAmount=state.totalAmount+ action.item.amount*action.item.price; 
  console.log(state.items);
  const existingitemIndex=state.items.findIndex((item)=>item.id===action.item.id)
  console.log(existingitemIndex);
  // console.log(action.item.id);

  const ExistingCartItem=state.items[existingitemIndex];  //for updation if item is alreadypresent
  // console.log(ExistingCartItem);
    let updatedItems;
    if(ExistingCartItem)
    { const updatedItem={
        ...ExistingCartItem,
        amount:ExistingCartItem.amount+action.item.amount
        
    };
    updatedItems=[...state.items]
    updatedItems[existingitemIndex]=updatedItem

    }
    else{
        updatedItems=state.items.concat(action.item)

    }
   
    
    return{
        items:updatedItems,
        totalAmount:UpdatedTotalAmount
    }

}

if(action.type==='REMOVE')
    {  const ExistingCartItemIndex=state.items.findIndex((item)=>item.id===action.id);
        
    const ExistingCartItem=state.items[ExistingCartItemIndex];
    const updatedtotalamount=state.totalAmount-ExistingCartItem.price;   
    let updatedItems;
    if(ExistingCartItem.amount===1)
    { updatedItems=state.items.filter(item=>item.id!==action.id);
         
    }else{
        const updatedItem={...ExistingCartItem,amount:ExistingCartItem.amount-1}
        updatedItems=[...state.items];
        updatedItems[ExistingCartItemIndex]=updatedItem;
    }
    return{
        items:updatedItems,
        totalAmount:updatedtotalamount
    };
    }
    if(action.type==='CLEAR')
    { return { items:[],
         totalAmount:0
    }

    }
}

const  ProductsProvider = (props) => {
   
  const[CurrentValue,dispatchaction]=useReducer(CartReducer,defaultState);
 
   const additemHandler=(item)=>{ 
   
    dispatchaction({type:'ADD',item})

   }
   const removeitemHandler=(id)=>{ 
    
    dispatchaction({type:'REMOVE',id:id});

   }
   const clear=()=>{
    dispatchaction({type:'CLEAR'})

   }
 
  const helper={
    items:CurrentValue.items,
    totalAmount:CurrentValue.totalAmount,
    clear:clear,
    additem:additemHandler,
    removeitem:removeitemHandler

  };

return <ItemContext.Provider value={helper}>
  {props.children}
</ItemContext.Provider>
  
}

export default ProductsProvider