import React, { useState } from "react";
import Input from "../component/Input";
import style from "styled-components";
import * as button from "../component/buttons";
import axios from "axios";
const Form = style.form`
  display:flex;
  flex-direction:column;
  margin: 3rem auto;
  align-items:center;
  width:35rem;

  &>div{
    position:relative;
  }
`;
const Label = style.label`
  font-size:2rem;
  z-index:10;
  display:block;
  color:#5a86bb;

`;

const Login = () => {
  // const [emailFocus, setEmailFocus] = useState(false);
  // const [passwordFocus, setPasswordFocus] = useState(false);

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Login</h2>
      <Form>
        <div>
          <Label>Email</Label>
          <Input type="text" name="email" />
        </div>
        <div>
          <Label>Password</Label>
          <Input type="password" />
        </div>
        <button.PrimaryButton
          style={{ alignSelf: "end", fontSize: "2rem", marginTop: "1rem" }}
          type="submit"
        >
          Login
        </button.PrimaryButton>
      </Form>
    </div>
  );
};

export default Login;
