import * as actionTypes from "../action/actionTypes";
const initialState = {
  data: {
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  },
  error: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    //register change handler
    case actionTypes.ADD_REGISTER_INPUT:
      const data = { ...state.data };
      data[action.id] = action.data;
      return { ...state, data };
    //register errors
    case actionTypes.REGISTER_USER_ERROR:
      return { ...state, error: action.errors };
    //clean state
    case actionTypes.REGISTER_SUCCESSFUL:
      return {
        ...state,
        data: {
          ...state.data,
          name: "",
          email: "",
          password: "",
          confirmPassword: ""
        },
        error: {}
      };
    default:
      return { ...state };
  }
};
export default reducer;
