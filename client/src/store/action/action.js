import * as actionTypes from "./actionTypes";
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
  return dispatch => {
    if (text) {
      axios.post("/api", { ok: text }).then(res => {
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

export const getItem = () => {
  return dispatch => {
    axios.get("/api/item").then(result => {
      console.log(result.data);
      dispatch(getItemAction(result.data));
    });
  };
};

export const deleteItem = item => {
  return {
    type: actionTypes.DELETE_ITEM,
    deletedItem: item
  };
};
