import React from "react";
import Item from "../component/item";
import style from "styled-components";
import * as actions from "../store/action";
import { connect } from "react-redux";

const ItemsContainer = style.div`
    margin:4rem auto;
    width:55rem;
`;

const Items = props => {
  const todos = ["Do homework", "Do Laundry", "Go to the gym"];
  return (
    <ItemsContainer>
      {props.todos.map((todo, index) => (
        <Item
          task={todo}
          key={index}
          deleteItem={() => props.onDeleteHandler(index)}
        />
      ))}
    </ItemsContainer>
  );
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onDeleteHandler: item => dispatch(actions.deleteItem(item))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Items);
