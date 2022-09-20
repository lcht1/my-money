import styled from "styled-components";

export const Container = styled.div`
    width: 70%;
    margin: 0 auto;
    padding: 5rem 0;
    display: grid;
    gap: 20px;
    color: #787878;
    background-color: blue;
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    gap: 10px;
    margin: 20px auto;
    background-color: blue;

    svg {
        width: 25px;
        height: 25px;
    }
`;

export const HeaderTitle = styled.p`
    font-size: 20px;
`;

export const Total = styled.span`
    font-size: 30px;
    font-weight: bold;
`;
