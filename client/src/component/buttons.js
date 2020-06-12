import style from "styled-components";

export const PrimaryButton = style.button`

    background-color: rgba(108,167,235,1);
    border: .2rem solid rgba(108,167,235,1);
    outline:none;
    font-size: 1.8rem;
    color:#fff;
    padding:.6rem 2.2rem;
    border-radius:.5rem;
    transition:all .3s;
    cursor:pointer;
    &:hover{
        background-color: rgb(45, 122, 210);
        border: .2rem solid rgb(45, 122, 210);
    }

`;
export const SecondaryButton = style.button`
    background-color: transparent;
    border: .2rem solid rgba(108,167,235,1);
    outline:none;
    font-size: 1.8rem;
    color:#000;
    padding:.6rem 2.2rem;
    border-radius:.5rem;
    transition:all .3s;
    cursor:pointer;

    &:hover{
        background-color: rgb(45, 122, 210);
        border: .2rem solid transparent;
        color:#fff;
    }
`;
