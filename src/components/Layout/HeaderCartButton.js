import React from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

// ~PROP CHAIN~
// Came from Header.js -> need to handle "onClick={props.showCartHandler}" which I receive ->
// "<button className={classes.button} onClick={props.onClick}>" - that the function I receive on onClick in the HeaderCartButton is forwarded to the onClick prop on the button "<button className=..." - ALL this for passing down a pointer at showCartHandler() (from App.js) to that HeaderCartButton ~PROP CHAIN~
const HeaderCartButton = (props) => {
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
