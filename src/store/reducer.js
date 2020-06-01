import * as actionTypes from "./actionTypes";
const initialState = {
  userInput: "",
  todos: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USER_INPUT:
      return { ...state, userInput: action.input };
    case actionTypes.ADD_TODO:
      if (action.item) {
        const todos = [...state.todos];
        todos.push(action.item);
        return { ...state, todos: todos, userInput: "" };
      }
    default:
      return { ...state };
  }
};

export default reducer;
