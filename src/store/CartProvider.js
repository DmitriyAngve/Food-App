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

// USEREF ~> VALIDATION FORM ~> useContext again ~> Outputing Cart Items
// HELLO I'M FROM Cart.js HERE we change logic for adding cart items
// STEP 6: Let's for with CartReducer component
// At the moment items added as new items in that array, let's change it
// 6.1 Before I derive my "updateItems" I instead wanna check if items is already part of the cart --> Create a existingCartItemIndex constant where I will reach out to my existing items in the cart and call ".findIndex"
// 6.2 Add callback into ".findIndex" --> it takes a function which should return true if that's the item we're looking for, and false otherwise. compare "item.id" with id the item we're adding with this "action" which was dispatched --> returns Index of item if it exists.
// 6.3 get the "existingCartItem" by reaching out to state.items and accessing that "existingCartItemIndex"
// 6.4 Now add an "updatedItem" variable and "updatedItems"
// 6.5 Add "checkif" "existingCartItem" is a truthy, which will only be the case if it's already part of the array. In this case, the "updatedItem" will be set equal to a nex object where I copy the "...existingCartItem" and update the amount (now need to change). If sushi was already part of the cart and I added to more sushis then, I need to update the amount: " amount: existingCartItem.amount + action.item.amount"
// 6.6 After this need updatedItems equals to a new array where I copy the existing items (create new array where I copy the old objects "...state.items")
// 6.7 And then for that "existingCartItemIndex" overwrite this with the "updatedItem"
// 6.8 Add "elsecase" if thaqt item is added for the first time to that cart items array: "updatedItem" is a brand new item where I copy "...action.item"
// 6.9 move " const updatedItems = state.items.concat(action.item)" to "elsecheck", delete "...action.item" and delete "let updatedItem"
// FINISH
// NOW LET'S IMPELEMENT DELETE AND ADD ITEMS
// GO TO Cart.js --->>>
// USEREF ~> VALIDATION FORM ~> useContext again ~> Outputing Cart Items

//

// ~ADD AND REMOVE ITEMS ON CART~
// HELLO I'M FROM Cart.js
// STEP 2:
// 2.1 Need Hadling that action: "dispatchCartAction({ type: "REMOVE", id: id })" from CartProvider.js ----> I should add another "ifcheck" where I check if "action.type" is "REMOVE". "if (action.type === "REMOVE")" - action.type from "removeItemFromCartHandler". Add before return my defaultCartState
// 2.2 Now I need update the cart (generally update existing cart item) . Get "const existingCartItemIndex = state.items.findIndex()" - same logic as before --> copy logic from "ADD"
// 2.3 Get to the item itself by then reaching out to "state.items" where I find the Index of "existingCartItemIndex" for that identified index here "[existingCartItemIndex]"
// 2.3 Now update total amount (add minus logic) "const updatedTotalAmount = state.totalAmount - existingItem.price"
// 2.4 Now update ITEMS variable and add another "ifcheck" if for the existing item the amount is equal to one (which means it's the last item of that type, which I wanna remove) and else (keep the item in the array, but wanna decrease the amount)
// 2.4.1 Starts on IF: add "filter" logic for "updatedItems". filter return a new array by applying specific conditions. Conditions: pass a function -> if rreturns true -> keep item in the newly returned array, if return false -> rid of it (based on id which I get on action of "existingCartItemIndex" where "findIndex")
// 2.4.2 "filter((item) => item.id !== action.id" with this logic I make sure that all items where the id is not equal to the action id are kept, but one item where item id is equal to the "action.id" will be remove (This ogic only in case of amount === 1) --->
// 2.4.3 ELSE: if amount !== 1 need just update the amount, dont remove from an array. Update item with copy of "existingItem" ("{...existingItem}") in a new object with the spread operator and UPDATE the amount ("existingItem.amount - 1")
// 2.4.5 Now update items: "updatedItems = [...state.items]" spread for copy old items, but override one of these item for that index which got here where I then override the old item in the array with the updated item which has the updated amount. "updatedItems[existingCartItemIndex] = updatedItem"
// 2.4.6 After this return new state object where items is "updatedItems" and "totalAmount" is equal "updatedTotalAmount"

// FINISH
// NOW GO TO Cart.js --->>>>  to wire up this button to CartRemoveHandler component

// ~ADD AND REMOVE ITEMS ON CART~

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

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
