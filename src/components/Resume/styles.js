import styled from "styled-components";

export const Container = styled.div`
    margin: 0 auto;
    padding: 5rem 0 2rem 0;
    display: grid;
    gap: 20px;
    max-width: 60%;
    color: #787878;

    svg {
        cursor: pointer;
    }
`;

export const ShowCharts = styled.p`
    cursor: pointer;
    display: flex;
    width: 100%;
    justify-content: flex-end;
    text-decoration: underline;
    font-size: 13px;
`;

export const ChartsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    background-color: transparent;
`;
export const GeneralInfos = styled.div`
    gap: 15px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`;

export const Box = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #fff;
    width: 100%;
    min-width: 200px;

    .transactions {
        cursor: pointer;

        display: flex;
        flex-direction: column;
        align-items: center;

        padding: 20px;

        box-shadow: 0 14px 21px 0 rgb(0 0 0 / 6%);

        border-radius: 0.25rem;

        :first-child {
            color: green;
        }

        :nth-child(2) {
            color: red;
        }
    }
`;

export const Balance = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 14px 21px 0 rgb(0 0 0 / 6%);
    border-radius: 0.25rem;
    padding: 1rem;
    width: 20rem;
    position: relative;

    .income {
        color: green;

        ::after {
            background-color: green;
            content: "";
            width: 10px;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
        }
    }

    .outcome {
        color: red;

        ::after {
            background-color: red;
            content: "";
            width: 10px;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
        }
    }

    .total {
        color: #000;

        ::after {
            background-color: #5429cc;
            content: "";
            width: 10px;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
        }
    }
`;

export const Background = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.4);
`;
