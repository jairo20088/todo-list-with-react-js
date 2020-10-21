import React, { useEffect } from "react";
import AddItem from "./containers/addItem";
import Navegation from "./containers/navegation";
import { Route, Redirect, withRouter } from "react-router-dom";
import Login from "./containers/login";
import Register from "./containers/register";
import { connect } from "react-redux";
import * as action from "./store/action/index";
import cookie from "react-cookies";
function App(props) {
  useEffect(() => {
    if (cookie.load("token") === undefined) {
      props.history.push("/login");
    } else {
      props.userAuthenticationHandler();
      props.history.push("/");
    }
  }, [props.isLogged]);

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
const mapDispatchToProps = dispatch => {
  return {
    userAuthenticationHandler: () => dispatch(action.loggedIn()),
    onGetItemHandler: () => dispatch(action.getItem())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
