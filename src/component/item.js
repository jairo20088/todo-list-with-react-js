import React from "react";
import style from "styled-components";

const ItemContainer = style.div`

    background-color: #e5effb;
    box-shadow: 3px 3px 3px #00000021, -3px -3px 3px #ffffff42;
    border-radius:12px;
    font-size:2.2rem;
    padding:1rem 3rem 2rem 3rem;
    margin-top:2rem;
`;
const Item = style.div`
    display:flex;
    flex-direction: column;
`;
const Controls = style.div`
  display:flex;
  font-size:1.5rem;
  justify-content: flex-end;
`;
const item = ({ task }) => {
  return (
    <div>
      <ItemContainer>
        <Item>
          <Controls>
            <div>Delete</div>
            <div>done</div>
            <div>edit</div>
          </Controls>
          <div>{task}</div>
        </Item>
      </ItemContainer>
    </div>
  );
};
export default item;
