import * as actionTypes from "../action/actionTypes";
const initialState = {
  login: {
    email: "",
    password: ""
  },
  error: "",
  isLoggedIn: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    //login change handler
    case actionTypes.ADD_LOGIN_INPUT:
      const login = { ...state.login };
      login[action.id] = action.data;
      return { ...state, login };
    // password or email error
    case actionTypes.LOGGING_ERROR:
      return { ...state, error: action.error };
    // set user login blank
    case actionTypes.USER_IS_LOGGEDIN:
      return {
        ...state,
        error: "",
        login: { ...state.login, email: "", password: "" },
        isLoggedIn: true
      };
    default:
      return { ...state };
  }
};
export default reducer;
