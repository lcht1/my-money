import React, { useState } from "react";
import IncomesAndExpenses from "../Charts/IncomesAndExpenses";

import { FiEyeOff, FiEye } from "react-icons/fi";

import {
    Balance,
    Box,
    Container,
    GeneralInfos,
    ShowCharts,
    ChartsContainer,
} from "./styles";
import Categories from "../Charts/Categories";

const Resume = ({ income, expense, total, transactionsList }) => {
    const [showData, setShowData] = useState(true);
    const [showCharts, setShowCharts] = useState(false);

    const expenses = transactionsList.filter(
        (transaction) => transaction.expense === true
    );

    const amountFood = transactionsList
        .filter(
            (transaction) =>
                transaction.category === "Alimentação" &&
                transaction.expense === true
        )
        .map((item) => Number(item.amount))
        .reduce((acc, at) => acc + at, 0);

    const amountHouse = transactionsList
        .filter(
            (transaction) =>
                transaction.category === "Casa" && transaction.expense === true
        )
        .map((item) => Number(item.amount))
        .reduce((acc, at) => acc + at, 0);

    const amountTransport = transactionsList
        .filter(
            (transaction) =>
                transaction.category === "Transporte" &&
                transaction.expense === true
        )
        .map((item) => Number(item.amount))
        .reduce((acc, at) => acc + at, 0);

    const amountLeisure = transactionsList
        .filter(
            (transaction) =>
                transaction.category === "Lazer" && transaction.expense === true
        )
        .map((item) => Number(item.amount))
        .reduce((acc, at) => acc + at, 0);

    const amountHealth = transactionsList
        .filter(
            (transaction) =>
                transaction.category === "Saúde" && transaction.expense === true
        )
        .map((item) => Number(item.amount))
        .reduce((acc, at) => acc + at, 0);

    const data = {
        amountFood,
        amountHouse,
        amountTransport,
        amountLeisure,
        amountHealth,
    };

    return (
        <Container>
            {showData ? (
                <FiEye onClick={() => setShowData(false)} />
            ) : (
                <FiEyeOff onClick={() => setShowData(true)} />
            )}
            <GeneralInfos>
                <Box>
                    <Balance>
                        <span>Receita mensal</span>
                        <span className="income">
                            {income && showData
                                ? `R$ ${income?.replace(".", ",")}`
                                : "----"}
                        </span>
                    </Balance>
                </Box>
                <Box>
                    <Balance>
                        <span>Despesa mensal</span>
                        <span className="outcome">
                            {expense && showData
                                ? `R$ ${expense?.replace(".", ",")}`
                                : "----"}
                        </span>
                    </Balance>
                </Box>
                <Box>
                    <Balance>
                        <span>Saldo total</span>
                        <span className="total">
                            {total && showData
                                ? total?.replace(".", ",")
                                : "----"}
                        </span>
                    </Balance>
                </Box>
            </GeneralInfos>
            {transactionsList.length > 0 && (
                <ShowCharts onClick={() => setShowCharts(!showCharts)}>
                    Mostrar gráficos
                </ShowCharts>
            )}

            {transactionsList.length > 0 && showCharts && (
                <ChartsContainer>
                    <IncomesAndExpenses expense={expense} income={income} />

                    {expenses.length > 0 && <Categories data={data} />}
                </ChartsContainer>
            )}
        </Container>
    );
};

export default Resume;
