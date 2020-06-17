import * as actionTypes from "./actionTypes";
import axios from "axios";
export const changeHandler = (identifier, fields) => {
  return {
    type: actionTypes.ADD_REGISTER_INPUT,
    id: identifier,
    data: fields
  };
};
export const postData = userData => {
  return dispatch => {
    axios.post("/register", userData).then(res => {
      console.log(res);
    });
  };
};
