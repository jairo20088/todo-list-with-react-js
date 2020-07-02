import * as actionTypes from "./actionTypes";
import axios from "axios";

export const changeHandler = (identifier, fields) => {
  return {
    type: actionTypes.ADD_REGISTER_INPUT,
    id: identifier,
    data: fields
  };
};
export const registerError = error => {
  return {
    type: actionTypes.REGISTER_USER_ERROR,
    errors: error
  };
};

export const postRegister = (userData, props) => {
  let dataErrorValue;
  let errorchecks;
  let dataError = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    alreadyExist: ""
  };

  return dispatch => {
    const regex = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;

    const passwordContains = /(?=^.{6,}$)((?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=(.*\d){1,}))((?!.*[",;&|'])|(?=(.*\W){1,}))(?!.*[",;&|'])^.*$/;

    if (!regex.test(userData.email.trim()) || userData.email.trim() === "") {
      dataError["email"] = "Invalid email address";
    }
    if (!userData.name) {
      dataError["name"] = "Name is required";
    }
    if (userData.password.length < 6) {
      dataError["password"] = "At least 6 character";
    } else {
      if (!passwordContains.test(userData.password)) {
        dataError["password"] =
          "At least 1 capital letter, 1 lower letter and number";
      } else {
        if (userData.password !== userData.confirmPassword) {
          dataError["confirmPassword"] = "Passwords don't match";
        }
      }
    }
    dataErrorValue = Object.values(dataError);
    errorchecks = dataErrorValue.every(el => el === "");
    if (!errorchecks) {
      return dispatch(registerError(dataError));
    }
    axios.post("/register", userData).then(res => {
      console.log(res);
      dataError["alreadyExist"] = res.data.error;
      dispatch(registerError(dataError));
      if (!res.data.error) {
        props.history.push("/login");
      }
    });
  };
};
