import styled from "styled-components";


export const Container = styled.header`

    grid-area: header;

    height:105px;
    width: 100%;

    border-bottom-width:1px;
    border-bottom-style: solid;
    border-bottom-color:  ${({ theme }) => theme.COLORS.BACKGROUND_700};

    > h1 {
        font-size: 24px;
        color: ${({theme}) => theme.COLORS.PINK};

    }

    display: flex;
    justify-content: space-between;
    padding: 40px 120px;
`;

export const Search = styled.div`
    grid-area: search;
    width: 400px;
`;


export const Profile = styled.div`
    display: flex;
    align-items: center;


    > img {
        width: 56px;
        height: 56px;
        border-radius: 50%;
    }

    > div {
        display: flex;
        flex-direction: column;
        margin-left: 16px;
        line-height: 24px;

        Strong {
            font-size: 18px;
            color: ${({theme}) => theme.COLORS.WHITE};
        }
    }
`;


export const Logout = styled.button`
        font-size: 14px;
        color: ${({theme}) => theme.COLORS.GRAY_300};

        width: 30px;
        height: 30px;
        border: none;
        background: none;

`;