import * as actionTypes from "./actionTypes";
const initialState = {
  userInput: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USER_INPUT:
      return { ...state, userInput: action.input };
    default:
      return { ...state };
  }
};

export default reducer;
