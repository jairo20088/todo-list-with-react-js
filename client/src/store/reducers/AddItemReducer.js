import * as actionTypes from "../action/actionTypes";
//import addItem from "../containers/addItem";
const initialState = {
  userInput: "",
  items: []
};

const getItem = (state, action) => {
  return { ...state, items: action.todos };
};

const addItem = (state, action) => {
  const todos = [...state.items, action.item];
  return { ...state, items: todos, userInput: "" };
};

const getUserInput = (state, action) => {
  return { ...state, userInput: action.input };
};

const deleteItem = (state, action) => {
  const todosDelete = [...state.items];
  const newTodo = todosDelete.filter(
    (el, index) => el.id !== action.deletedItem
  );
  return { ...state, items: newTodo };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USER_INPUT:
      return getUserInput(state, action);

    case actionTypes.ADD_TODO:
      return addItem(state, action);

    case actionTypes.DELETE_ITEM:
      return deleteItem(state, action);

    case actionTypes.GET_TODO:
      return getItem(state, action);
    default:
      return { ...state };
  }
};

export default reducer;
