import * as actionTypes from "./actionTypes";
import cookie from "react-cookies";
import axios from "axios";
import * as action from "./index";
export const changeLoginHandler = (identifier, fields) => {
  return {
    type: actionTypes.ADD_LOGIN_INPUT,
    id: identifier,
    data: fields
  };
};

export const error = errorMessage => {
  return {
    type: actionTypes.LOGGING_ERROR,
    error: errorMessage
  };
};

export const loggedIn = () => {
  return {
    type: actionTypes.USER_IS_LOGGEDIN
  };
};

export const postLogin = (login, props) => {
  return dispatch => {
    const regex = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;

    if (!regex.test(login.email)) {
      return dispatch(error("Invalid email and Invalid password"));
    }
    axios
      .post("/auth", login)
      .then(res => {
        if (res.data.invalid) {
          return dispatch(error(res.data.invalid));
        }
        dispatch(loggedIn());
        const token = res.data.token;
        cookie.save("token", token);
        return props.history.push("/");
      })
      .catch(err => {
        throw new Error("Error has occured on the server");
      });
  };
};
export const logoutAction = () => {
  return {
    type: actionTypes.USER_LOGOUT
  };
};
export const logout = props => {
  return dispatch => {
    axios
      .post("/logout", { message: "logout" })
      .then(re => {
        dispatch(logoutAction());
        dispatch(action.clearItem());
        props.history.push("/login");
      })
      .catch(e => {
        console.log(e);
      });
  };
};
