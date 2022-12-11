import { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

// ~CART REDUCER ~ USEREF
// HELLO, I'm FROM CartProvider.js
// Here wanna nadle the form submission, then "+ Add" button is clicked and item to the cart because that's what this form is there for ("<form className={classes.form}>")
// STEP 2:
// 2.1 Add "submitHandler" function in component "MealItemForm", where we get an "event" object which is sent as an parameter automatically when I call this function (submitHandler) upon a built-in "event"
// 2.2 Call "submitHandler" in form with "onSubmit" event (onSubmit={submitHandler})
// 2.3 add "event.preventDefault()" - to make sure that, that browser default of reloading the page is prevented
// 2.4 Then wanna extract the entered amount. Use "refs" for that - the alternative would be two way binding by manageing some state. Add import.
// 2.5 Add "ref={}" prop to an Input.
// 2.6 Add useRef in "MealItemForm" component ("amountInputRef") and pass into "ref={}", but "Input" this is a custom component the ref prop doesn't work at least not out of the box. For work do this:
// 2.6.1 Go to the component where I wanna receive refs (Input.js) and make sure you import React in there from React and ->
// 2.6.2 And wrap Input component function with "React.forwardRef" - after this component function is now our argument to forwardRef
// 2.6.3 Then add ref like React.forwardRe ("React.forwardRef(props, ref)"), which can now be set through the red prop on your Component as a second paramater
// 2.6.4 Now use it (ref) inside of Component function to forward that ref to that input "<input ref={ref}..." after that ref is being set on "Input" component in MealItemForm.js
// 2.7 Thats allows to read that entered value in "submitHandler". Add const "enteredAmount" by accesseing "amountInputRef.current.value". Its always stored current for refs created with useRef.value cuz "amountInputRef.current" will point at the input element which is stored in that ref in the end ("ref={amountInputRef}") which holds the currently ENTERED value. That value is always a string
//2.8 Convert into a string ("enteredAmountNumber")
// 2.9 Add "ifcheck" for validation where we check the "enteredAmount" as text, trimmed white space and length (m.b. empty) or 1<"enteredAmountNumber">5
// 2.10 If this validation is checked I wanna return and not continue with this function (add return for fast stop) "submitHandler"
// 2.11 Output error message below input and button and therefore I'll manage some state - > use useState -> it was simply control whether this form is valid or not and I'll set this to true initially and extract two values (state snapshot and the state updating function)
// 2.12 And if I make it into this "ifcheck" in "submitHandler" -> the entered input was not valid -> ADD "setAmountIsValid(false)" and if "amountIsValid" is false, then I wanna output an error message
// 2.13 Add below the "button" -> " {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}" - this is state and conditional rendering again
// 2.14 I wanna execute my context methods to add a cart item, but not in this component. In this component I will call a function which I expect to get on props "onAddToCart(enteredAmountNumber)", cuz the cart item which I wanna add needs more data then just the entered amount. On this MealItemForm.js I only have that amount, I don't have the ID or NAME or a PRICE of that "item", that why I'm not calling the context method here, just calling some other function "onAddToCart" which I expect to get through props to parse the "enteredAmountNumber" and validated to that "onAddToCart" function.
// 2.15 GO TO MealItem.js!!!
// ~CART REDUCER ~ USEREF

const MealItemForm = (props) => {
  const amountInputRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);

  // input here be used in multiple parts of the application (reusable pre-styled utility components like input/buttons in bigger application)

  // <Input label= "Amount"/> - label prop because I'm expecting a lebal prop form Input.js with some text inside of it

  // input={{}} - input prop which now itself sould hold an object. Double curly braces - it's no special syntax. First - to evaluate a JavaScript expression, which is passed in as a value and then that expression just happens to be a JavaScript object, hence here that other pair of braces

  // defaultValue - initial value. All this props is default props, which I can add to any input element. These a not props which we need to interpret and handle, instead we just distribute them onto the input through this syntax {...props.input} (from Input.js) and then they automatically start making sense, because these are all built-in props for input elements

  // "id: "amount_" + props.id" - make sure that the id props is passed correctly to <MealItemForm /> when that component is being used (i.e. inside of the MealItem component)

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
    </form>
  );
};

export default MealItemForm;
