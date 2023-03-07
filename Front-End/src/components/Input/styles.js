import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;

    background-color: fff;
    color: fff;

    margin-bottom: 8px;
    border-radius:10px; 

    > input {
        height: 56px;
        width: 100%;

        padding: 12px;
        color: fff;
        background: transparent;
        border: 0;

        &:placeholder{
            color: fff;
        }

       
     }

     > svg {
            margin-left: 16px;
        }

`;



