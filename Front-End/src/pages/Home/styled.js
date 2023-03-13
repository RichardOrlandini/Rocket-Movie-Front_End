import styled from "styled-components";

import {Link} from 'react-router-dom';


export const Container = styled.div`
    width: 100%;
    height: 100vh;
     
    display: grid;

    grid-template-rows: 116px 132px auto;    

    grid-template-areas: 
    "header"
    "newnote"
    "content";

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};


    

`;    



export const NewNote = styled(Link)`

    grid-area: newnote;

    display: flex;
    justify-content: space-between;
    padding: 50px 123px;


    > h1 {
        font-size: 32px;
        line-height: 42px;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    > Button {
        width: 207px;
        height: 48px;
        color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    }

`;


export const Content = styled.div`

    grid-area: content;


    padding: 0px 64px;
    overflow-y: auto;
`;