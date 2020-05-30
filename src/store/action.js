import * as actionTypes from "./actionTypes";

export const onUserInput = inputText => {
  console.log(inputText);
  return {
    type: actionTypes.GET_USER_INPUT,
    input: inputText
  };
};
