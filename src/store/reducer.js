const initialSTate = {
  name: "jose"
};

const reducer = (state = initialSTate, action) => {
  switch (action.type) {
    case action.SET_NAME:
      return { ...state, name: "alejandra" };
    default:
      return { ...state };
  }
};

export default reducer;
