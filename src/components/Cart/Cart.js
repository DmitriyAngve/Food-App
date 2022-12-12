import { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  // helper for cartItems (map all items)

  // "<li>{item.name}</li>" just output a list item
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <li>{item.name}</li>
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
