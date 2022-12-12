import { useReducer } from "react";
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

// ~CART REDUCER~
// Let's adding Cart Items. Here I manage put cart data. Than "addItemToCartHandler" is called I get the item that should be added to the cart,and then I wanna check if that item is already part of the cart (if I already have "item" in the cart) -> I wanna just update the existing item, if it's not the case, I wanna add a new item
// Let's manange state of "CartProvider" component
// LETS START: STEP 1
// 1.1 Outside of this component function add my "cartReducer" function (outside because this function won't need anything in component function). And shouldn't be recreated all the time when the component is reevaluated
// 1.2 Add arguments in "cartReducer" -> state object (last state snapshot of the state managed by the reducer) and action (the action is dispatched ne you later in your code)
// 1.3 "return" in function -> returns a new state snapshot
// 1.4 create another const "defaultCartState" -> it's an object, where i say that I have no items, aand "totalAmount" is zero
// 1.5 And this "defaultCartState" I return in "cartReducer"
// 1.6 Call useReducer at the top of "CartProvider" component with first argument "cartReducer" (don't executed, just point, react himself will execute) and initial state is "defaultCartState" (re-using this constant)
// 1.7 Remember! useReducer returns an array with two elements -> use array destructuring and store them in separate constants. The first element of that array is always my state snapshot. Second element is function which allows to dispatch an action to the reducer (both customs names)
// 1.8 After that a change my "hardcodded" my "cartContext" object "items: cartState.items" - because we're now managing the items with state and the same "totalAmount"
// 1.9 Now I can start dispatching actions -> wanna start with adding items to the cart in "addItemToCartHandler" ("dispatchCartAction" - added in function) It's totally up to me what an action is. It could be a number or a text, but typicaly it's an object which has some property which allows you to identify that action inside of reducer function ("cartReducer"). "{type: "ADD"}" - convention
// 1.9.1 Now wanna forward the "item" (arg) as part of the action. Second property -> named item (custom) and point at my "item"(arg). So that I'm forwarding the item which I expect to get here on this function to my reducer. DO same in "removeItemToCartHandler".
// 1.10 Now go to the "cartReducer" and start adding logic for adding a cart item here.
// 1.10.1 Adding "check if" the action.type is equal to ADD (check ADD or REMOVE which type of action it was triggered)
// 1.10.2 Update my cart items. Add our "item" as a new element in that array and manage the amount on a per meal basis (update the "totalAmount" for all agregated cart items). Create an array "updatedItems" (items in the current state snapshot, which we get as a first argument in the reducer by React) and call concat(actio.item) (cuz return new array) Important: update state in an immutable way."concat(actio.item)" - which I getting -> all the data I need on that "action.item", I expect to have all of that on the "item", which reaches this "addItemToCartHandler"
// 1.10.3. Now I get the "updatedItems", create "updatedTotalAmount" - > it should simply be the old totalAmount ("state.totalAmount" - on the old state snapshot). Multiply two action... I know by how much our totalAmount needs to change
// 1.10.4 Then return new state snapshot were set items equals to updateItems and totalAmount same
// FINISH logic: but now i need to make sure as NEXT STEP "addItemToCartHandler" is being called from some components in my application with appropriate data
// Make sure that this "addItemToCartHandler" is being called, for that I need to go to the place where we wanna call "addItem" on our context object

// GO TO MealItemForm.js

// ~CART REDUCER~

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
