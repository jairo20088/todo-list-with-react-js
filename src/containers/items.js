import React from "react";
import Item from "../component/item";
import style from "styled-components";
import { connect } from "react-redux";

const ItemsContainer = style.div`
    margin:4rem auto;
    width:55rem;
`;

const Items = props => {
  return (
    <ItemsContainer>
      {props.todos.map((todo, index) => (
        <Item task={todo} key={index} />
      ))}
    </ItemsContainer>
  );
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps)(Items);
