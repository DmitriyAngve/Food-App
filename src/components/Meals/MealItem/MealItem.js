import { useContext } from "react";
import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`; // make sure that we always render two decimal places

  // props.name - property name in DUMMY_MEALS

  // USEREF ~> VALIDATION FORM ~> useContext again
  // HELLO I'M FROM MealItemForm.js
  // MealFunction Component - where "onAddToCart" (from MealItemForm.js) will be defined
  //STEP: 3
  // 3.1 Add "addToCartHandler" function where I get validated "amount" as a parameter.
  // 3.2 Pass a pointer to that "addToCartHandler" function into the "MealItemForm" on "onAddCart" prop, which executing in Form component (MealItemForm.js), points "addToCartHandler"
  // 3.3 And now import useContext for adding context in "addToCartHandler"
  // 3.4 Import "CartContext" and add "useContext()" at component and pass "CartContex" to establish a connection ("const cartCtx = useContext(CartContext)")
  // 3.5 Now call "cartCTX.addItem" (addItem - from cartProvider.js), which is one of the methods defined in our context, which point at "addItemToCartHandler".
  // 3.6 Now need to parse this "item". I expect to get the item, which forward to the reducer (" dispatchCartAction({ type: "ADD" })") !!ALWAYS LOOK AT CartProvider.js!!. Create a new object with an "id" which I expect to get through props (id, name, amount) Amount field which points at the amount we're getting here ("const addToCartHandler = (amount) =>") and price (not formated price, but price as a number)
  // NOW GO TO AvailableMeals.js => where I rendered all the meal items!
  // USEREF ~> VALIDATION FORM ~> useContext again

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
