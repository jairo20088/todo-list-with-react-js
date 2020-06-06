import * as actionTypes from "./actionTypes";
const initialState = {
  userInput: "",
  todos: [],
  Item: []
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
      break;
    case actionTypes.DELETE_ITEM:
      const todos = [...state.todos];
      const newTodo = todos.filter((el, index) => index !== action.deletedItem);
      return { ...state, todos: newTodo };
    case actionTypes.GET_TODO:
      return { ...state, Item: action.todos };
    default:
      return { ...state };
  }
};

export default reducer;
