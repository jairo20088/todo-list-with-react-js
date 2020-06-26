import * as actionTypes from "../action/actionTypes";
const initialState = {
  data: {
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  },
  error: {
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    //register change handler
    case actionTypes.ADD_REGISTER_INPUT:
      const data = { ...state.data };
      data[action.id] = action.data;
      return { ...state, data };
    case actionTypes.REGISTER_USER_ERROR:
      const errors = { ...state.error };
      errors[action.id] = action.error;
      return { ...state, ...errors };
    default:
      return { ...state };
  }
};
export default reducer;
