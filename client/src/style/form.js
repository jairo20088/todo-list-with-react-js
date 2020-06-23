import style from "styled-components";

export const Form = style.div`
  display:flex;
  flex-direction:column;
  margin:  auto;
  align-items:center;
  width:35rem;

  &>div{
    position:relative;
  }
`;
export const Label = style.label`
  font-size:2rem;
  z-index:10;
  display:block;
  color:#5a86bb;

`;
