import * as actionTypes from "./actionTypes";
import axios from "axios";

export const changeHandler = (identifier, fields) => {
  return {
    type: actionTypes.ADD_REGISTER_INPUT,
    id: identifier,
    data: fields
  };
};
export const registerError = (identifier, error) => {
  return {
    type: actionTypes.REGISTER_USER_ERROR,
    id: identifier,
    error: error
  };
};

export const postRegister = (userData, props) => {
  let dataError = {
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  };

  return dispatch => {
    const regex = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;

    if (!regex.test(userData.email)) {
      return dispatch(registerError("email", "Invalid email"));
    }

    if (userData.name == "") {
      return dispatch(registerError("name", "Name Required"));
    }

    axios.post("/register", userData).then(res => {
      console.log(res);
      props.history.push("/login");
    });
  };
};
