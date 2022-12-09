import React, { Fragment } from "react";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  // here be 2 blocks: toolbar and image below the header

  // ~PROP CHAIN~
  // I wana execute function from App.js. Whenever this HeaderCartButton is being clicked. Create inside custom component. let's expect that a onClick props (name - no matter). To this prop pass a pointer to that function, recevieng on props onShowCart
  // After adding "onClick={props.onShowCart}" I'm forwarding that point at that function to the onClick prop on the HeaderCartButton.js
  // ~PROP CHAIN~
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
