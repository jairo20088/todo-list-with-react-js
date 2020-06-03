import * as actionTypes from "./actionTypes";
import axios from "axios";

export const userInput = inputText => {
  return {
    type: actionTypes.GET_USER_INPUT,
    input: inputText
  };
};
export const addTodo = text => {
  axios.get("http://dummy.restapiexample.com/api/v1/employees").then(result => {
    console.log(result);
  });
  return {
    type: actionTypes.ADD_TODO,
    item: text
  };
};
export const deleteItem = item => {
  return {
    type: actionTypes.DELETE_ITEM,
    deletedItem: item
  };
};
