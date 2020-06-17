import React from "react";
import Input from "../component/Input";

import * as button from "../style/buttons";

import * as Form from "../style/form";
import { connect } from "react-redux";
import * as action from "../store/action/registerAction";
const Register = props => {
  // const [emailFocus, setEmailFocus] = useState(false);
  // const [passwordFocus, setPasswordFocus] = useState(false);

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Login</h2>
      <Form.Form action="/">
        <div>
          <Form.Label>Name</Form.Label>
          <Input
            type="text"
            changed={e => props.onChangeHandler("name", e.target.value)}
            value={props.data.name}
          />
        </div>
        <div>
          <Form.Label>Email</Form.Label>
          <Input
            type="email"
            changed={e => props.onChangeHandler("email", e.target.value)}
            value={props.data.email}
          />
        </div>
        <div>
          <Form.Label>Password</Form.Label>
          <Input
            type="password"
            changed={e => props.onChangeHandler("password", e.target.value)}
            value={props.data.password}
          />
        </div>
        <div>
          <Form.Label>Confirm Password</Form.Label>
          <Input
            type="password"
            changed={e =>
              props.onChangeHandler("confirmPassword", e.target.value)
            }
            value={props.data.confirmPassword}
          />
        </div>
        <button.PrimaryButton
          style={{ alignSelf: "end", fontSize: "2rem", marginTop: "1rem" }}
          onClick={() => props.onPostDataHandler(props.data)}
        >
          Register
        </button.PrimaryButton>
      </Form.Form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    data: state.register.data
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onChangeHandler: (identifier, value) =>
      dispatch(action.changeHandler(identifier, value)),
    onPostDataHandler: userData => dispatch(action.postData(userData))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
