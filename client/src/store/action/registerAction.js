import * as actionTypes from "./actionTypes";
import axios from "axios";

export const changeHandler = (identifier, fields) => {
  return {
    type: actionTypes.ADD_REGISTER_INPUT,
    id: identifier,
    data: fields
  };
};
export const changeLoginHandler = (identifier, fields) => {
  return {
    type: actionTypes.ADD_LOGIN_INPUT,
    id: identifier,
    data: fields
  };
};
export const postRegister = userData => {
  return dispatch => {
    axios.post("/register", userData).then(res => {
      console.log(res);
    });
  };
};
export const postLogin = login => {
  return dispatch => {
    axios.post("/auth", login).then(responde => {
      console.log(responde);
    });
  };
};
