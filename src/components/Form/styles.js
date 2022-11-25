import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 98%;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
    max-width: 60%;
    margin: 20px auto;
`;

export const InputContent = styled.div`
    display: flex;
    flex-direction: column;

    :first-child {
        flex-grow: 2;
    }
`;

export const Label = styled.label`
    display: flex;
    align-items: center;
    column-gap: 20px;

    span {
        color: #5429cc;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    gap: 20px;
`;

export const Input = styled.input`
    outline: none;
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 15px;
    border: 1px solid #ccc;
    color: #787878;
`;

export const CategoryOptions = styled.select`
    outline: none;
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 15px;
    border: 1px solid #ccc;
    background: transparent;
    color: #787878;
`;

export const RadioGroup = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 10px;

    input {
        margin-left: 20px;
        margin-right: 5px;
        accent-color: black;
        margin-top: 0;
    }
`;

export const Button = styled.button`
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: white;
    background-color: #5429cc;
    align-self: center;
    width: 200px;
`;
