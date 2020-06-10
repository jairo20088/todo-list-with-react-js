import React from "react";
import Search from "../component/searcBar";
import Button from "../component/button";
import * as actions from "../store/action/action";
import { connect } from "react-redux";

const AddItem = props => {
  return (
    <div>
      <Search
        changed={e => props.onChangeHandler(e.target.value)}
        value={props.userInput}
      />
      <Button
        label="Add"
        clicked={() => props.onAddItemHandler(props.userInput)}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    userInput: state.addItems.userInput
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChangeHandler: text => dispatch(actions.userInput(text)),
    onAddItemHandler: input => dispatch(actions.addTodo(input))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddItem);
