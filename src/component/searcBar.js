import React from "react";
import style from "styled-components";
const searchBar = props => {
  const InputText = style.input`
        display:block;
        margin:1rem auto;
        height:5rem;
        font-size:2rem;
        width:60rem;
        outline:none;
        border-radius: .7rem;
        border:none;
        box-shadow: -3px -3px 5px #f5f5f5,
                     3px 3px 5px rgba(108, 167, 235, .160);
        padding:1rem;
        transition: all .2s;

        &:focus{
          border: 2px solid rgb(93, 138, 189);;
        }


    `;

  return (
    <div>
      <InputText type="text" placeholder="Add Item" />
    </div>
  );
};
export default searchBar;
