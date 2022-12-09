import classes from "./Card.module.css";

// This component will be simple, it will just be a wrapper component which provides some HTML structure and some CSS for any content you want
const Card = (props) => {
  // With props.children - whatvever is passed between the openening and closing tag of the Card component is in the end used inside of Card
  return <div className={classes.card}>{props.children}</div>;
};

export default Card;
