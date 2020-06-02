import React from "react";
import style from "styled-components";

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
          transform:scale(.91);
      }
  `;
const button = ({ label, clicked }) => {
  return (
    <div>
      <Button onClick={clicked}>{label}</Button>
    </div>
  );
};
export default button;
