import styled from "styled-components";



export const Container = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

    border: none;
    border-radius: 10px;
    padding: 22px;
    margin-bottom: 16px;

    > h1 {
        flex: 1;
        text-align: left;
        font-weight: 700;
        font-size: 24px;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    > footer {
        width: 100px;
        display: flex;
        margin-top: 24px;
    }
`;