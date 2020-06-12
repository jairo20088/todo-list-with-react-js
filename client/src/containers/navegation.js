import React from "react";
import style from "styled-components";
import * as Button from "../component/buttons";

const NavContainer = style.div`
    background-color:#fff;
    padding:1rem;
    font-size:1.5rem;
    display: flex;
    justify-content:space-between;

`;

const Navegation = () => {
  return (
    <NavContainer>
      <div>Logo</div>
      <div>
        <Button.PrimaryButton style={{ marginRight: "2rem" }}>
          Login
        </Button.PrimaryButton>
        <Button.SecondaryButton>Register</Button.SecondaryButton>
      </div>
    </NavContainer>
  );
};
export default Navegation;
