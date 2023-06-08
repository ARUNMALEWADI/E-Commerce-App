import React, { useReducer } from 'react'
import ItemContext from './ItemContext';

const defaultState={
  items:[],
  totalAmount:0
}

const CartReducer=(state,action)=>{
if(action.type==='ADD')
{  const UpdatedTotalAmount=state.totalAmount+ action.item.amount*action.item.price; 
  const existingitemIndex=state.items.findIndex((item)=>item.id===action.item.id)
  console.log(action.item.id);

  const ExistingCartItem=state.items[existingitemIndex];  //for updation if item is alreadypresent
  console.log(ExistingCartItem);
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

return defaultState;
}

const  ProductsProvider = (props) => {
   
  const[CurrentValue,dispatchaction]=useReducer(CartReducer,defaultState);
 
   const additemHandler=(item)=>{ 
    dispatchaction({type:'ADD',item})

   }
   const removeitemHandler=(item)=>{ 
    
   

   }
 
  const helper={
    items:CurrentValue.items,
    totalAmount:CurrentValue.totalAmount,
    additem:additemHandler,
    removeitem:removeitemHandler

  };

return <ItemContext.Provider value={helper}>
  {props.children}
</ItemContext.Provider>
  
}

export default ProductsProvider