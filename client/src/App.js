import React from "react";
import AddItem from "./containers/addItem";
import Items from "./containers/items";
function App() {
  return (
    <div className="App">
      <div>navegation</div>
      <AddItem />
      <Items />
    </div>
  );
}

export default App;
