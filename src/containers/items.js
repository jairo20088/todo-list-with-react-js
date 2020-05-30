import React from "react";
import Item from "../component/item";
import style from "styled-components";

const ItemsContainer = style.div`
    margin:4rem auto;
    width:55rem;
`;

const todoList = ["Do math homework", "Do Laundry", "Do Dishes"];

const Items = () => {
  return (
    <ItemsContainer>
      {todoList.map((todo, index) => (
        <Item task={todo} key={index} />
      ))}
    </ItemsContainer>
  );
};
export default Items;
