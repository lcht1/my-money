import React, { useState } from "react";
import { Chart } from "react-google-charts";

import { Container } from "./styles";

const IncomesAndExpenses = ({ expense, income }) => {
    const [options] = useState({
        title: "Gráfico de despesa e receita (R$)",
        backgroundColor: "transparent",
    });

    const data = [
        ["Tipo", "Valor"],
        ["Receita", income && Number(income)],
        ["Despesa", expense && Number(expense)],
    ];

    return (
        <Container>
            <Chart
                width={"500px"}
                height={"300px"}
                chartType="PieChart"
                data={data}
                options={options}
            />
        </Container>
    );
};

export default IncomesAndExpenses;
