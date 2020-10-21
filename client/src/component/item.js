import React from "react";
import style from "styled-components";
import deleteBottom from "../assets/trash.svg";
import checkedBottom from "../assets/correct.svg";
import "./style.css";

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
const item = ({ task, deleteItem, doneItem, classess }) => {
  return (
    <div>
      <div className={classess}>
        <Item>
          <Controls>
            <Image src={deleteBottom} onClick={deleteItem} />
            <Image src={checkedBottom} onClick={doneItem} />
            {/* <Image src={editBottom} onClick={editItem} /> */}
          </Controls>
          <div className="TaskText">{task}</div>
        </Item>
      </div>
    </div>
  );
};
export default item;
