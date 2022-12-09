import React from "react";

//~ CONTEXT~
// STEP 1:
// Context created!
// NEXT: need to manage that context in some component with useState or useReducer !! Create Cart.Provider.js !!
//~ CONTEXT~
// Default data, which will not actually be used but which give us better auto-completion later. This context can also change over time and can update parts of the application over time

const CartContext = React.createContext({
  // use items array because we aer going to manage a couple of cart items
  items: [],
  // initally totalAmount: 0
  totalAmount: 0,
  // And two functions which allows to update that context
  // 1. - additem receives the item that should be added
  addItem: (item) => {},
  //2. - removeItem which receives an ID's to identify the item which should be removed from the cart
  removeItem: (id) => {},
});

export default CartContext;
