import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
import { useRef } from "react";

// ~CART REDUCER~
// HELLO, I'm FROM CartProvider.js
// Here wanna nadle the form submission, then "+ Add" button is clicked and item to the cart because that's what this form is there for ("<form className={classes.form}>")
// STEP 2:
// 2.1 Add "submitHandler" function in component "MealItemForm", where we get an "event" object which is sent as an argument automatically when I call this function (submitHandler) upon a built-in "event"
// 2.2 Call "submitHandler" in form with "onSubmit" event (onSubmit={submitHandler})
// 2.3 add "event.preventDefault()" - to make sure that, that browser default of reloading the page is prevented
// 2.4 Then wanna extract the entered amount. Use "refs" for that - the alternative would be two way binding by manageing some state. Add import.
// 2.5 Add "ref={}" prop to an Input.
// 2.6 Add useRef in "MealItemForm" component ("amountInputRef") and pass into "ref={}", but "Input" this is a custom component the ref prop doesn't work at least not out of the box. For work do this:
// 2.6.1 Go to the component where I wanna receive refs (Input.js)
// ~CART REDUCER~

const MealItemForm = (props) => {
  const amountInputRef = useRef();

  // input here be used in multiple parts of the application (reusable pre-styled utility components like input/buttons in bigger application)

  // <Input label= "Amount"/> - label prop because I'm expecting a lebal prop form Input.js with some text inside of it

  // input={{}} - input prop which now itself sould hold an object. Double curly braces - it's no special syntax. First - to evaluate a JavaScript expression, which is passed in as a value and then that expression just happens to be a JavaScript object, hence here that other pair of braces

  // defaultValue - initial value. All this props is default props, which I can add to any input element. These a not props which we need to interpret and handle, instead we just distribute them onto the input through this syntax {...props.input} (from Input.js) and then they automatically start making sense, because these are all built-in props for input elements

  // "id: "amount_" + props.id" - make sure that the id props is passed correctly to <MealItemForm /> when that component is being used (i.e. inside of the MealItem component)

  const submitHandler = (event) => {
    event.preventDefault();
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
    </form>
  );
};

export default MealItemForm;
