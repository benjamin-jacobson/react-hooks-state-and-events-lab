import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature

  const [ darkLightModeBoolean , setdarkLightModeBoolean] = useState(true)
  const appClass = darkLightModeBoolean ? "App dark" : "App light"

  function handleClick(){
    console.log("Button pushed")
    setdarkLightModeBoolean(!darkLightModeBoolean)
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{ darkLightModeBoolean ? "Dark Mode" : "Light Mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
