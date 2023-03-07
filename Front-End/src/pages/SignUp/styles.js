import styled from "styled-components";
import imgM from "../../assets/imgM.png"

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
`;

export const Form = styled.form`

    padding: 0 136px;

    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    text-align: center;

    > h1 {

        font-size: 48px;
    }

    > h2 {
        font-size: 24px;
        margin: 84px 0;
    }

    > p {
        font-size: 14px;
        color: fff;
    }

    > a {
        margin-top: 124px;
        color: fff;
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${imgM}) no-repeat center center;
    background-size: cover;
`;