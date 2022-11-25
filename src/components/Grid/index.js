import React from "react";
import GridItem from "../GridItem";
import { Table, Thead, Tr, Th, Tbody } from "./styles";

const Grid = ({ itens, setItens }) => {
    const onDelete = (id) => {
        const newTransactions = itens.filter(
            (transaction) => transaction.id !== id
        );
        setItens(newTransactions);
        localStorage.setItem("transactions", JSON.stringify(newTransactions));
    };

    return (
        <Table>
            <Thead>
                <Tr>
                    <Th width={40}>Descrição</Th>
                    <Th width={20}>Categoria</Th>
                    <Th width={20}>Valor</Th>
                    <Th width={10} alignCenter>
                        Tipo
                    </Th>
                    <Th width={10}></Th>
                </Tr>
            </Thead>
            <Tbody>
                {itens?.map((item, index) => (
                    <GridItem key={index} item={item} onDelete={onDelete} />
                ))}
            </Tbody>
        </Table>
    );
};

export default Grid;
