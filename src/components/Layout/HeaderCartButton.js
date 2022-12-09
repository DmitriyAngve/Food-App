import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";

// ~PROP CHAIN~
// Came from Header.js -> need to handle "onClick={props.showCartHandler}" which I receive ->
// "<button className={classes.button} onClick={props.onClick}>" - that the function I receive on onClick in the HeaderCartButton is forwarded to the onClick prop on the button "<button className=..." - ALL this for passing down a pointer at showCartHandler() (from App.js) to that HeaderCartButton ~PROP CHAIN~

//~ CONTEXT~
// STEP 4: HEllo, I came from App.js!!!
// 4.1 Import useContext
// 4.2 Import "CartContext" itself (no need provider here)
// 4.3 Call useContext in component and pass "CartContext" to it to gewt access to this cart context, which is managed by the CLOSEST provider(!!!) which is <CartProvider> in the "App.js" inside of the HeaderCartButton component
// 4.4 And store this object (right side) at variable "cartCtx". By using useContext the header cart button component will be a re-evalueted by React whenever the context changes and Tiit changes when we do update it in a "CartProvider" component (After this I established this connection)
// 4.5 Now I can use this to output my number of cart items. For this create new const "numberOfCartItems" and use the length of array to get the number of cart items!
// NEXT:
//~ CONTEXT~

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items; // don't forget items lay in CartContext component

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
