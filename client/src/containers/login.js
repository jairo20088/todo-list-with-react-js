import React from "react";
import Input from "../component/Input";

import * as button from "../style/buttons";

import * as Form from "../style/form";

const Login = () => {
  // const [emailFocus, setEmailFocus] = useState(false);
  // const [passwordFocus, setPasswordFocus] = useState(false);

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Login</h2>
      <Form.Form>
        <div>
          <Form.Label>Email</Form.Label>
          <Input type="text" name="email" />
        </div>
        <div>
          <Form.Label>Password</Form.Label>
          <Input type="password" />
        </div>
        <button.PrimaryButton
          style={{ alignSelf: "end", fontSize: "2rem", marginTop: "1rem" }}
          type="submit"
        >
          Login
        </button.PrimaryButton>
      </Form.Form>
    </div>
  );
};

export default Login;
