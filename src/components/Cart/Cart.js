import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = (props) => {
  // helper for cartItems (map all items)

  // "<li>{item.name}</li>" just output a list item
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  // ~PROP CHAIN~ CLOSE BUTTON {Second Step}
  // HELLO, Im came from App.js
  // Work with close button
  // Added: "onClick={props.onClose}" onClose - name from App.js (there points at "hideCartHandler")
  // ~PROP CHAIN~ CLOSE BUTTON {GO to MODAL and male the click on backdrop close modal Cart}
  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
