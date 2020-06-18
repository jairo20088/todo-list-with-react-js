import * as actionTypes from "../action/actionTypes";
const initialState = {
  data: {
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  },
  login: {
    email: "",
    password: ""
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    //register change handler
    case actionTypes.ADD_REGISTER_INPUT:
      const data = { ...state.data };
      data[action.id] = action.data;
      return { ...state, data };
    //login change handler
    case actionTypes.ADD_LOGIN_INPUT:
      const login = { ...state.login };
      login[action.id] = action.data;
      return { ...state, login };
    default:
      return { ...state };
  }
};
export default reducer;
