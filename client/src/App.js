import React from "react";
import AddItem from "./containers/addItem";
import Navegation from "./containers/navegation";
import { Route } from "react-router-dom";
import Login from "./containers/login";
import Register from "./containers/register";
function App() {
  return (
    <div className="App">
      <Navegation />
      <Route exact path="/" component={AddItem} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/klk/:id" component={Login} />
    </div>
  );
}

export default App;
