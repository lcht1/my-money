import React, { useState } from "react";
import Grid from "../Grid";

import {
    Container,
    InputContent,
    Label,
    Button,
    RadioGroup,
    Input,
    Wrapper,
} from "./styles";

const Form = ({ handleAdd, transactionsList, setTransactionsList }) => {
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");
    const [isExpense, setIsExpense] = useState(false);

    const generateID = () => Math.round(Math.random() * 1000);

    const handleSave = () => {
        if (!description || !amount) {
            alert("Informe a descrição e o valor!");
            return;
        }

        const transaction = {
            id: generateID(),
            desc: description,
            amount: amount,
            expense: isExpense,
        };

        handleAdd(transaction);

        setDescription("");
        setAmount("");
    };

    return (
        <>
            <Container>
                <Wrapper>
                    <InputContent>
                        <Label>Descrição</Label>
                        <Input
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="ex: Aluguel da casa"
                        />
                    </InputContent>
                    <InputContent>
                        <Label>Valor (R$)</Label>
                        <Input
                            value={amount}
                            type="number"
                            onChange={(e) => setAmount(e.target.value)}
                        />
                    </InputContent>
                </Wrapper>
                <RadioGroup>
                    <Input
                        type="radio"
                        id="income"
                        defaultChecked
                        name="group1"
                        onChange={() => setIsExpense(!isExpense)}
                    />
                    <Label htmlFor="income">Entrada</Label>

                    <Input
                        type="radio"
                        id="expanse"
                        name="group1"
                        onChange={() => setIsExpense(!isExpense)}
                    />
                    <Label htmlFor="expanse">Saída</Label>
                </RadioGroup>
                <Button onClick={handleSave}>ADICIONAR</Button>
            </Container>
            <Grid itens={transactionsList} setItens={setTransactionsList} />
        </>
    );
};

export default Form;
