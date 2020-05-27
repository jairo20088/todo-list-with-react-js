import React from "react";
import style from "styled-components";

const button = ({ label }) => {
  const Button = style.button`
        font-size:2rem;
        padding:1rem 4rem;
        display:block;
        margin:0 auto;
        background-color:rgba(108, 167, 235, 1);
        color:White;
        border:none;
        outline:none;
        cursor: pointer;
        transition:all .2s;

        &:hover{
            background-color:rgb(93, 138, 189);
        }
        &:active{
            transform:scale(.98);
        }
    `;

  return (
    <div>
      <Button>{label}</Button>
    </div>
  );
};
export default button;
