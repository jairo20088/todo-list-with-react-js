import * as actionTypes from "./actionTypes";

export const userInput = inputText => {
  return {
    type: actionTypes.GET_USER_INPUT,
    input: inputText
  };
};
export const addTodo = text => {
  return {
    type: actionTypes.ADD_TODO,
    item: text
  };
};
