import React, { useEffect, useState } from "react";
import Item from "../component/item";
import style from "styled-components";
import * as actions from "../store/action/index";
import { connect } from "react-redux";

const ItemsContainer = style.div`
    margin:4rem auto;
    width:55rem;
`;

const Items = props => {
  let [x, setX] = useState(false);

  useEffect(() => {
    props.onGetItemHandler();
  }, [x]);

  return (
    <ItemsContainer>
      {props.Item.map((todo, index) => {
        let itemClass = ["Items"];

        if (todo.isDone) {
          itemClass.push("itemsDone");
        } else {
          itemClass = ["Items"];
        }

        return (
          <Item
            classess={itemClass.join(" ")}
            task={todo.item}
            key={index}
            doneItem={() => {
              props.onItemDoneHandler(todo);
              setX(state => {
                props.onGetItemHandler();
                return !state;
              });
            }}
            deleteItem={() => props.onDeleteHandler(todo.id)}
          />
        );
      })}
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
    onGetItemHandler: () => dispatch(actions.getItem()),
    onItemDoneHandler: item => dispatch(actions.ItemDone(item))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Items);
