import React from "react";
import Search from "../component/searcBar";
import Button from "../component/button";
import * as actions from "../store/action";
import { connect } from "react-redux";

const AddItem = props => {
  return (
    <div>
      <Search changed={e => props.onChangeHandler(e.target.value)} />
      <Button label="Add" />
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onChangeHandler: text => dispatch(actions.onUserInput(text))
  };
};
export default connect(null, mapDispatchToProps)(AddItem);
