import classes from "./Input.module.css";
import React from "react";

const Input = React.forwardRef((props, ref) => {
  // "<label>{props.label}</label>" - label text should be configurable (label prop with label text and input prop which then itself holds an object with configuration data for the input, like "id")

  // {...props.input} trick to pass all other configuration data I might've gotten for this input to this input element here as props. This ensures that all the key value pairs in input object which we receive on props input are added as props to input (if we receive {type: "text"}, with this trick would make sure that "type="text" "is being added )
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}> {props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
