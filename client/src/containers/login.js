import React from "react";
import { connect } from "react-redux";
import Input from "../component/Input";
import * as action from "../store/action/registerAction";
import * as button from "../style/buttons";

import * as Form from "../style/form";

const Login = props => {
  // const [emailFocus, setEmailFocus] = useState(false);
  // const [passwordFocus, setPasswordFocus] = useState(false);

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Login</h2>
      <Form.Form>
        <div>
          <Form.Label>Email</Form.Label>
          <Input
            type="email"
            name="email"
            changed={e => props.onChangeHandler("email", e.target.value)}
          />
        </div>
        <div>
          <Form.Label>Password</Form.Label>
          <Input
            type="password"
            changed={e => props.onChangeHandler("password", e.target.value)}
          />
        </div>
        <button.PrimaryButton
          style={{ alignSelf: "end", fontSize: "2rem", marginTop: "1rem" }}
          type="submit"
          onClick={() => props.onPostLogin(props.data)}
        >
          Login
        </button.PrimaryButton>
      </Form.Form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    data: state.register.login
  };
};
const mapDispathToProps = dispatch => {
  return {
    onPostLogin: login => dispatch(action.postLogin(login)),
    onChangeHandler: (identifier, value) =>
      dispatch(action.changeLoginHandler(identifier, value))
  };
};

export default connect(mapStateToProps, mapDispathToProps)(Login);