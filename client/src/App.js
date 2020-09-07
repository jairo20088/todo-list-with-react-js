import React, { useEffect, useState } from "react";
import AddItem from "./containers/addItem";
import Navegation from "./containers/navegation";
import { Route, Redirect, withRouter } from "react-router-dom";
import Login from "./containers/login";
import Register from "./containers/register";
import { connect } from "react-redux";
import cookie from "react-cookies";

import * as action from './store/action/authAction';
function App(props) {
  const [loggin, setLoggin] = useState(false);

  useEffect(() => {
    if (cookie.load("token") === undefined) {

    } else {
      setLoggin(true);
      console.log("looged")
      props.userAuthenticationHandler();
      props.history.push("/");
    }
  }, [])

  return (
    <div className="App">
      <Navegation />
      {loggin ? (
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
    userAuthenticationHandler: () => dispatch(action.loggedIn())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
