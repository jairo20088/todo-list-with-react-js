import React from "react";
import style from "styled-components";
import Input from "../component/Input";

import * as button from "../style/buttons";

import * as Form from "../style/form";
import { connect } from "react-redux";

import * as action from "../store/action/index";

const ListContainer = style.ul`
  list-style:none;
  margin-bottom:.5rem;
`;
const ListItem = style.li`
  font-size:1.5rem;
  margin-bottom:.2rem;
  margin-left:.6rem;
  color:red;
`;

const ErrorText = style.p`
  font-size:1.5rem;
  color:red;
  margin-bottom:.5rem;
`;
const Required = style.sup`
  color:red;
`;

const Register = props => {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Register</h2>
      <ErrorText style={{ textAlign: "center" }}>
        {props.error.alreadyExist}
      </ErrorText>
      <Form.Form action="/">
        <div>
          <Form.Label>
            Name <Required>*</Required>
          </Form.Label>
          <Input
            error={props.error.name}
            type="text"
            changed={e => props.onChangeHandler("name", e.target.value)}
            value={props.data.name}
          />
          <ErrorText>{props.error.name ? props.error.name : null}</ErrorText>
        </div>
        <div>
          <Form.Label>
            Email <Required>*</Required>
          </Form.Label>
          <Input
            error={props.error.email || props.error.alreadyExist}
            type="email"
            changed={e => props.onChangeHandler("email", e.target.value)}
            value={props.data.email}
          />

          <ErrorText>{props.error.email ? props.error.email : null}</ErrorText>
        </div>
        <div>
          <Form.Label>
            Password <Required>*</Required>
          </Form.Label>
          <Input
            error={props.error.password}
            type="password"
            changed={e => props.onChangeHandler("password", e.target.value)}
            value={props.data.password}
          />
          <ListContainer>
            <ListItem>At least 6 characters</ListItem>
            <ListItem>At least 1 capital letter</ListItem>
            <ListItem>At least 1 lower letter</ListItem>
            <ListItem>At least 1 number</ListItem>
          </ListContainer>
        </div>

        <div>
          <Form.Label>
            Confirm Password <Required>*</Required>
          </Form.Label>
          <Input
            error={props.error.confirmPassword}
            type="password"
            changed={e =>
              props.onChangeHandler("confirmPassword", e.target.value)
            }
            value={props.data.confirmPassword}
          />
          <ErrorText>
            {props.error.confirmPassword ? props.error.confirmPassword : null}
          </ErrorText>
        </div>
        <button.PrimaryButton
          style={{ alignSelf: "end", fontSize: "2rem", marginTop: "1rem" }}
          onClick={() => {
            props.onPostDataHandler(props.data, props);
          }}
        >
          Register
        </button.PrimaryButton>
      </Form.Form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    data: state.register.data,
    error: state.register.error
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onChangeHandler: (identifier, value) =>
      dispatch(action.changeHandler(identifier, value)),
    onPostDataHandler: (userData, allProps) =>
      dispatch(action.postRegister(userData, allProps))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
