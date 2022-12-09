import { Fragment } from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom"; // used for portals!

// I will create separately backdrop and overlay components

// ~PROP CHAIN~ CLOSE BUTTON {Third Step}
// HELLO, Im came from Cart.js
// Work with close when click on backdrop
// Added: "onClick={props.onClose}" on Backdrop component
// After look at Modal (JSX), added: "onClose={props.onClose}" in Modal component itself
// ~PROP CHAIN~ RESULT: passing a value through multiple levels, down to the backdrop, NOW GO TO CART

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

// {props.children} - this will be the actual content passed between the modal opening and closing tags by at a component where the modal is getting used
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

// Helper const for portals:
const portalElement = document.getElementById("overlays");

// Here I use React Portal for both backdrop, so that thing behind the modal overlay which blocks interaction with the rest of the page and also wanna render the modal overlay itself with react Portal to use that component whatever I want by render the actual HTML elements in a specific place in the DOM tree.
const Modal = (props) => {
  // Add string  <div id="overlays"></div> in index.html (public folder)
  // Portals: will call the create Portal method, which is built into React in both these expressions.
  // Portals have 2 arguments - second arg is div in index.html
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

/*
If I don't have to use a Portal
<Fragment>
  <Backdrop />
  <ModalOverlay>{props.children}</ModalOverlay>
</Fragment>;
*/

export default Modal;
