import React, { useContext, useEffect, useState } from "react";
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
// 4.5 Now I can use this to output my number of cart items. For this create new const "numberOfCartItems" and use the reduce method to calculate number of cart items! (first arg: func, sec: starting value)
// 4.6 Use reduce. "curNumber" - a number of value which has carried on across executions. "+ item.amount" because my cart items object wil have an "amount" field which stores the number of items per item type.
// 4.7 This is "numberOfCartItems" which will be output in "span className={classes.badge}"
//~ CONTEXT~

// ~ FINAL STEP OF APPLICATION ~
// Add animation on "+ Add" button
// Pay attention to css file HeaderCartButton.module.css (there animation)
// STEP: 1
// 1.1 Create variable: "btnClasses" in HeaderCartButton Component.
// 1.2 Add classes.button and animation classes ("{classes.bump}")
// 1.3 Change <button className={}> in JSX to <button className={btnClasses}
// 1.4 Use UseEffect for add animation whenever this cart changes -> import useEffect and call useEffect (font forget about dependencies)
// 1.5 Wanna change "btnClasses" to include the bump animation class and set a timer which removes that class again so that when it's added again in the future, it agains play -->> imort useState because need to re-evaluate and re-render this component when that animation class is added
// 1.6 Call useState with "false" initially, cuz this will control whether or not the button should be animated
// 1.7 In useEffect call function "setBtnIsHighlighted" and set is to "true"
// 1.8 Change "bntClasses" - let's check if "btnIsHighlighted" is true with ternary operator " btnIsHighlighted ? classes.bump : "" " empty string means - no added extra css.class (Do it here cuz, since I'm updating the state, the whole component will re-execute when that state changes)
// 1.9 Let's impement logic: only change if my items changed and if the length is greater than zero (if as least one item in the cart). Add "checkif"
// 1.10 "Ifcheck" in useEffect() ---> "if (cartCtx.items.length === 0)" if this condition is not met ---> the rest of this effect function doesn't execute (should only execute if I have at least oine item in the cart)
// 1.11 Now need add the DEPENDENCY. For this I use object destructuring to pull out the items, to get them out of my cart ("const {items} = cartCtx")
// 1.12 Change useEffect "ifcheck" ---> refer to items, not "cartCtx" directly ("if (items.length === 0)") and pass "items" as a dependency (so it's not entire context, but only the items array is a dependency for this effect function)
// 1.13 Change "numberOfCartItems" cartCtx.items change to items
// 1.14 Now the bounce only happence one because class is added, but not removed.
// 1.15 Add removed this class after the animation finished. Do that by setting a timer to useEffect() which fires after 300 milliseconds (that the duration of animation in css). Trigger a function where I set "setBtnIsHighlighted" is back to "false" ---> if that "false" then "btnIsHighlighted ? classes.bump : "" " empty string is added to the classes string instead a "classes.bump"
// 1.16 Store all (1.15) into variable for case that component should be removed. Need "cleanup" timer or any side effects that might be ongoing cuz I started them in useEffect "return () => {clearTimeout(timer);};"

//

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0); // don't forget items lay in CartContext component

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
