import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  // input here be used in multiple parts of the application (reusable pre-styled utility components like input/buttons in bigger application)

  // <Input label= "Amount"/> - label prop because I'm expecting a lebal prop form Input.js with some text inside of it

  // input={{}} - input prop which now itself sould hold an object. Double curly braces - it's no special syntax. First - to evaluate a JavaScript expression, which is passed in as a value and then that expression just happens to be a JavaScript object, hence here that other pair of braces

  // defaultValue - initial value. All this props is default props, which I can add to any input element. These a not props which we need to interpret and handle, instead we just distribute them onto the input through this syntax {...props.input} (from Input.js) and then they automatically start making sense, because these are all built-in props for input elements

  // "id: "amount_" + props.id" - make sure that the id props is passed correctly to <MealItemForm /> when that component is being used (i.e. inside of the MealItem component)
  return (
    <form className={classes.form}>
      <Input
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
