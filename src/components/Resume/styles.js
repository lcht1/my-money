import styled from "styled-components";

export const Container = styled.main`
    width: 60%;
    margin: 0 auto;
    padding: 5rem 0 2rem 0;
    display: grid;
    gap: 20px;
    max-width: 1080px;
    color: #787878;
`;

export const GeneralInfos = styled.div`
    display: flex;
    justify-content: space-between;

    gap: 15px;
`;

export const Box = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #fff;

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
    width: 300px;
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
