import React from "react";
import { connect } from "react-redux";
import Input from "../component/Input";
import * as action from "../store/action/authAction";
import * as button from "../style/buttons";
import style from "styled-components";
import * as Form from "../style/form";

const ErrorText = style.p`
  text-align:center;
  font-size:1.7rem;
  color:red;
  margin-bottom:1rem;

`;
const Login = props => {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Login</h2>
      <ErrorText>{props.error ? props.error : null}</ErrorText>
      <Form.Form>
        <div>
          <Form.Label>Email</Form.Label>
          <Input
            error={props.error}
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
          onClick={() => props.onPostLogin(props.data, props.history)}
        >
          Login
        </button.PrimaryButton>
      </Form.Form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    data: state.auth.login,
    error: state.auth.error
  };
};
const mapDispathToProps = dispatch => {
  return {
    onPostLogin: (login, history) => dispatch(action.postLogin(login, history)),
    onChangeHandler: (identifier, value) =>
      dispatch(action.changeLoginHandler(identifier, value))
  };
};

export default connect(mapStateToProps, mapDispathToProps)(Login);
