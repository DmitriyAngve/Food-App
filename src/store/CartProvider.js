import CartContext from "./cart-context";

//~ CONTEXT~
// STEP 2: HEllo, I came from cart-context.js!
// 2.1 Provider created: this component need to manage the current context to data and provide that context to all components that want access to it
// 2.2 {props.children} - that allows to wrap any components that should get access to this context with this "CartProvider" component
// 2.3 Create Helper constant in this "CartProvider". "cartContext" is an object with all fields I set up for the "cart-context.js" itself (this will be the concrete context value thoug, which will also be updated over time)
// 2.4 Add  functions (addItem:(item) => {} and removeItem:(id) => {}) to cart handler. And pointes at this functions which are stored as values for addItem and removeItem in "cartContext" object!
// 2.5 After this cartContext object set as a value for the value PROP: add  "value={CartContext}" on a "CartContext.Provider"
// NEXT: GO TO App.js!!!
//~ CONTEXT~
//

const CartProvider = (props) => {
  const addItemToCartHandler = (item) => {};

  const removeItemToCartHandler = (id) => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
