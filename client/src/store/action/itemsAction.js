import * as actionTypes from "./actionTypes";
import cookie from "react-cookies";
import axios from "axios";

export const userInput = inputText => {
  return {
    type: actionTypes.GET_USER_INPUT,
    input: inputText
  };
};

export const addTodoItem = text => {
  return {
    type: actionTypes.ADD_TODO,
    item: text
  };
};
export const addTodo = text => {
  var token = cookie.load("token");
  return dispatch => {
    if (text) {
      axios
        .post(
          "/add-item",
          { ok: text },
          { headers: { authorization: "Bearer " + token } }
        )
        .then(res => {
          console.log(res);
          dispatch(addTodoItem(res.data));
        });
    }
  };
};

export const getItemAction = todo => {
  return {
    type: actionTypes.GET_TODO,
    todos: todo
  };
};
export const clearItem = () => {
  return {
    type: actionTypes.CLEAR_ITEM
  };
};

export const getItem = () => {
  var token = cookie.load("token");
  return dispatch => {
    axios
      .get("/api/item", { headers: { Authorization: "Bearer " + token } })
      .then(result => {
        dispatch(getItemAction(result.data));
      });
  };
};

export const deleteItem = item => {
  var token = cookie.load("token");
  axios.delete("/item/delete", {
    headers: { Authorization: "Bearer " + token },
    data: { id: item }
  });

  return {
    type: actionTypes.DELETE_ITEM,
    deletedItem: item
  };
};
