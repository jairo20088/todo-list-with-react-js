import React from "react";
import AddItem from "./containers/addItem";
import Navegation from "./containers/navegation";
import { Route, Redirect } from "react-router-dom";
import Login from "./containers/login";
import Register from "./containers/register";
import { connect } from "react-redux";
function App(props) {
  console.log(props);
  return (
    <div className="App">
      <Navegation />
      {props.isLogged ? (
        <Route exact path="/" component={AddItem} />
      ) : (
        <Redirect to="/login" />
      )}

      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
    </div>
  );
}
const mapStateToProps = state => {
  return {
    isLogged: state.auth.isLoggedIn
  };
};
export default connect(mapStateToProps)(App);
