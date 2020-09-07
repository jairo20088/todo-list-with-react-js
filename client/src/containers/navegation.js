import React from "react";
import style from "styled-components";
import * as Button from "../style/buttons";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as action from "../store/action/index";

const NavContainer = style.div`
    background-color:#fff;
    padding:1rem;
    font-size:1.5rem;
    display: flex;
    justify-content:space-between;

`;

const Navegation = props => {
  const Buttons = (
    <div>
      <Button.PrimaryButton
        style={{ marginRight: "2rem" }}
        onClick={() => props.history.push("/login")}
      >
        Login
      </Button.PrimaryButton>
      <Button.SecondaryButton onClick={() => props.history.push("/register")}>
        Register
      </Button.SecondaryButton>
    </div>
  );
  const LoggedOutButton = (
    <div>
      <Button.PrimaryButton
        style={{ marginRight: "2rem" }}
        onClick={() => props.logoutHandler(props)}
      >
        Logout
      </Button.PrimaryButton>
    </div>
  );

  return (
    <NavContainer>
      <div>Logo</div>
      {props.logged ? LoggedOutButton : Buttons}
    </NavContainer>
  );
};
const mapStateToProps = state => {
  return {
    logged: state.auth.isLoggedIn
  };
};
const mapDispatchToProps = dispatch => {
  return {
    logoutHandler: (props) => dispatch(action.logout(props))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Navegation));
