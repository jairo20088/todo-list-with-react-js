import React, { useEffect } from "react";
import Item from "../component/item";
import style from "styled-components";
import * as actions from "../store/action/index";
import { connect } from "react-redux";

const ItemsContainer = style.div`
    margin:4rem auto;
    width:55rem;
`;

const Items = props => {
  useEffect(() => {
    console.log("Items Component");
    props.onGetItemHandler();
  }, []);

  return (
    <ItemsContainer>
      {props.Item.map((todo, index) => (
        <Item
          task={todo.item}
          key={index}
          deleteItem={() => props.onDeleteHandler(todo.id)}
        />
      ))}
    </ItemsContainer>
  );
};

const mapStateToProps = state => {
  return {
    todos: state.addItems.todos,
    Item: state.addItems.items,
    isLogged: state.auth.isLoggedIn
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onDeleteHandler: item => dispatch(actions.deleteItem(item)),
    onGetItemHandler: () => dispatch(actions.getItem())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Items);
