import React,{useState, useEffect} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
const [darkMode, setDarkMode] = useState(false)
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  // const appClass = darkMode ? "App Dark" : "App Light ";
  const appClass = darkMode ? "dark-mode" : "light-mode ";

  function handleClick() {
    setDarkMode(!darkMode);
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{ darkMode? 'Dark Mode' : 'Light Mode'}</button> 
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
