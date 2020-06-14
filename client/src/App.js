import React from "react";
import AddItem from "./containers/addItem";
import Items from "./containers/items";
import Navegation from "./containers/navegation";
import { Route } from "react-router-dom";
import Login from "./containers/login";
function App() {
  return (
    <div className="App">
      <Navegation />

      {/* <AddItem />
      <Items /> */}
      <Route path="/login" component={Login} />
    </div>
  );
}

export default App;
