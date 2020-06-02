import React from "react";
import style from "styled-components";
import deleteBottom from "../assets/trash.svg";
import checkedBottom from "../assets/correct.svg";
import editBottom from "../assets/edit.svg";

const ItemContainer = style.div`

    background-color: #e5effb;
    box-shadow: 3px 3px 3px #00000021, -3px -3px 3px #ffffff42;
    border-radius:12px;
    font-size:2.2rem;
    padding:1rem 3rem 2rem 3rem;
    margin-top:2rem;
    transition:all .2s;


    &:hover{
      background-color: #d1e0f3;
    }
`;
const Image = style.img`
    display:block;
    margin-right:1rem;
    width:2rem;
    cursor:pointer;
    transition:all .2s;
    opacity:.50;

    &:hover{
      opacity:1;
    }

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
const item = ({ task, deleteItem, doneItem, editItem }) => {
  return (
    <div>
      <ItemContainer>
        <Item>
          <Controls>
            <Image src={deleteBottom} onClick={deleteItem} />
            <Image src={checkedBottom} onClick={doneItem} />
            <Image src={editBottom} onClick={editItem} />
          </Controls>
          <div>{task}</div>
        </Item>
      </ItemContainer>
    </div>
  );
};
export default item;
