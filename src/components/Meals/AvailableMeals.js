import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

// USEREF ~> VALIDATION FORM ~> useContext again
// HELLO I'M FROM MealItem.js
// STEP 4:
// 4.1 Add id={meal.id} - in "<MealItem..." - that should be triggering that context method whenever that form is submitted and that should then add items to the cart
// NOW GO TO Cart.js
// USEREF ~> VALIDATION FORM ~> useContext again

const AvailableMeals = () => {
  // key={meal.id} every meal has id
  const mealsList = DUMMY_MEALS.map((meal) => (
    // "description={meal.description}" - pass in the name prop from MealItem.js
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
