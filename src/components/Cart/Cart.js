import { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  // helper for cartItems (map all items)

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  // ~ADD AND REMOVE ITEMS ON CART~
  // Back to functions "cartItemRemoveHandler" and "cartItemAddHandler"
  // Add logic to "cartItemAddHandler" which is being triggered when "plus" button for a "CaretItem" is clicked
  // STEP 1:
  // 1.1 Add to "cartItemAddHandler" "cartCtx" and call "addItem" with "cartCtx.addItem({ ...item, amount: 1 })" logic for adding +1. It is related to the function from CartProvider.js ("addItemToCartHandler")
  // 1.2 Need Hadling that action: "dispatchCartAction({ type: "REMOVE", id: id })" from CartProvider.js ---->
  // GO TO CartProvider.js to "CartReducer" -->>>
  // ~ADD AND REMOVE ITEMS ON CART~

  // ~ADD AND REMOVE ITEMS ON CART~
  // HELLO I'M FROM CartProvider.js
  // STEP 3:
  // 3.1 Add new logic to "cartItemRemoveHandler" from CartProvider.js (CartReducer component) --->>>  cartCtx.removeItem(id);
  // ~ADD AND REMOVE ITEMS ON CART~

  // "<li>{item.name}</li>" just output a list item
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  // ~PROP CHAIN~ CLOSE BUTTON {Second Step}
  // HELLO, Im came from App.js
  // Work with close button
  // Added: "onClick={props.onClose}" onClose - name from App.js (there points at "hideCartHandler")
  // ~PROP CHAIN~ CLOSE BUTTON {GO to MODAL and male the click on backdrop close modal Cart}

  // ~PROP CHAIN~ CLOSE BUTTON {FOURTH Step}
  // HELLO, Im came from Modal.js
  // Add: "onClose={props.onClose}>" on Modal itself
  // ~PROP CHAIN~ FINISH

  // USEREF ~> VALIDATION FORM ~> useContext again ~> Outputing Cart Items
  // HELLO I'M FROM AvailableMealItem.js
  // STEP 5:
  // 5.1 Use context again. Import useContext and "CartContext"
  // 5.2 In a Cart componentn call useContext and pass "CartContext" to it to get access to that cart Context
  // 5.3 Store it to cartCtx
  // 5.4 Replace "dummy_array" to carCtx.items to transfrom these items to items in the cart
  // 5.5 let's correct cart items look and let's always make sure we output the "totalAmount". For this create const "totalAmount" and then access cartCtx.totalAmount and toFixed(2) and put it into a template literal for dynamically injected and derived JavaScript expression
  // 5.6 Add "totalAmount" variable into JSX Code (into span)
  // 5.7 Create const "hasItems" (to show if there are items in the cart) and simply check if cart context items has a length greater then zero
  // 5.8 Add in JSX code check if "hasItems" is true -> then rendered a button (" {hasItems && <button...")
  // 5.9 let's make how these cart items are being displayed. Create CarItem.js component and his css and IMPORT in Cart.js and render "cartItem" in JSX
  // 5.10 "CartItem" component is a List -> add key={items.id} and name={item.name}, amount={item.amount} price={item.price} for DISPLAYING!
  // 5.11 let's pass functions for Add and Remove Items from the Cart. "cartItemRemoveHandler" by id and "cartItemAddHandler" by item itself
  // 5.12 Add pn a list in CartItem component: "onRemove" (name from provided component CartItem.js) points "cartItemRemoveHandler" and add the same
  // 5.13 For all two functions should call "bind" and bind "null" and "item.id" - this ensures that the id of the to be added or removed items is passed here to remove handler. Bind pre-configure as a function for future execution and allows me to pre-configure the argument that function will receive when it's being executed
  // GO TO CartProvider.js for change logic addind cart items- >>>
  // USEREF ~> VALIDATION FORM ~> useContext again ~> Outputing Cart Items

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
