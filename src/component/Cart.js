import React, {createContext, useReducer, useEffect} from 'react'
import './cart.css';

import  Prodect  from "./Prodect";

import NewCart from './NewCart';
import {reducer} from './reducer';


export const CartContext = createContext();


const initialState = {
    item: Prodect,
    totalAmount: 0,
    totalItem: 0
}
const Cart = () => {

const [state, dispatch] = useReducer(reducer, initialState)
    //   ...for items delete
  const removeItems = (id) => {
return dispatch({
    type: 'REMOVE-ITEM',
    payload: id,
});
  };
//   ...clear full carts
const clearCart = () => {
return dispatch({type: 'Clear-Cart'})
}
// ...increment items
const increment = (id) => {
return dispatch({
    type: 'INCREMENT',
    payload: id,
})
};
// ...decrement items
const decrement = (id) => {
return dispatch({
    type: 'DECREMENT',
    payload: id,
})
}
// for total amount
useEffect(() => {
dispatch({ type: "GET_TOTAL",
});
    console.log("Clicked");
  }, [state.item]);
    return (
        <>
        <CartContext.Provider value={{...state, removeItems, clearCart, increment, decrement}}>

        <NewCart />
        
        </CartContext.Provider>
        </>
    )
}

export default Cart