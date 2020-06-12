import React from "react";
import AddItem from "./containers/addItem";
import Items from "./containers/items";
import Navegation from "./containers/navegation";
function App() {
  return (
    <div className="App">
      <Navegation />
      <AddItem />
      <Items />
    </div>
  );
}

export default App;
