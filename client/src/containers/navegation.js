import React from "react";
import style from "styled-components";
import * as Button from "../style/buttons";
import { withRouter } from "react-router-dom";

const NavContainer = style.div`
    background-color:#fff;
    padding:1rem;
    font-size:1.5rem;
    display: flex;
    justify-content:space-between;

`;

const Navegation = props => {
  return (
    <NavContainer>
      <div>Logo</div>
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
    </NavContainer>
  );
};
export default withRouter(Navegation);
