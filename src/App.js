import { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  // In this file I do render the Cart, so that is where I wanna manage the visibility of the Cart - therefore we use useState here
  const [cartIsShown, setCartIsShown] = useState(false); // initial state - false, because cart not visible at first when visiting

  // useState - registering it with react, so that react can manage this state for this component and then getting access to the latest state snapshot (cartIsShown) whenever this component (return(...)) is re-evaluated and getting access to this function (setCartIsShown), which allows us to update the state

  // Functions which should be called then is button is clicked or when the backdrop is clicked
  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  // After this functions I need to use that setCartIsShown state and make sure that these two functions (show and hide) getting called

  // "{cartIsShown && <Cart />}" - shortcut to render Cart. If first part is truthy -> Cart rendered, if falsy -> not rendered

  // ~PROP CHAIN~
  // "<Header onShowCart={showCartHandler} />" use "showCartHandler" inside the Header. Let's call this function -> pass a pointer at the function down through props, no matter how I named that prop (start with on - comvention)
  // Go to Header.js to HeaderCartButton
  // ~PROP CHAIN~

  // ~PROP CHAIN~ CLOSE BUTTON {First Step}
  //After make "close" button with "onClose={hideCartHandler}"
  // Go to Cart.js
  // ~PROP CHAIN~ CLOSE BUTTON

  //~ CONTEXT~
  // STEP 3: HEllo, I came from Cart.Provider.js!!!
  // 3.1. Replace wrapper "<Fragment>Here all JSX</Fragment>" to <CartProvider> as a new wrapper component
  // NEXT: Using The Context! GO TO HeaderCartButton.js!!!
  //~ CONTEXT~

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
