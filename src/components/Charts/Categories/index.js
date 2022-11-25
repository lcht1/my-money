import React, { useState } from "react";
import { Chart } from "react-google-charts";

import { Container } from "./styles";

const Categories = ({ data }) => {
    const [options] = useState({
        title: "Gráfico de despesas e categorias (R$)",
        backgroundColor: "transparent",
    });

    console.log(data, "data aqui");

    const total = [
        ["Tipo", "Valor"],
        ["Alimentação", Number(data.amountFood)],
        ["Casa", Number(data.amountHouse)],
        ["Transporte", Number(data.amountTransport)],
        ["Lazer", Number(data.amountLeisure)],
        ["Saúde", Number(data.amountHealth)],
    ];

    return (
        <Container>
            <Chart
                width={"500px"}
                height={"300px"}
                chartType="PieChart"
                data={total}
                options={options}
            />
        </Container>
    );
};

export default Categories;
