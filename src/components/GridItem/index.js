import React from "react";
import { Td, Tr } from "./styles";
import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaTrash,
} from "react-icons/fa";

const GridItem = ({ item, onDelete }) => {
    return (
        <Tr>
            <Td>{item.desc}</Td>
            <Td>{item.category}</Td>
            <Td>R$ {item.amount}</Td>
            <Td alignCenter>
                {item.expense ? (
                    <FaRegArrowAltCircleDown color="red" />
                ) : (
                    <FaRegArrowAltCircleUp color="green" />
                )}
            </Td>
            <Td alignCenter>
                <FaTrash color="#5429cc" onClick={() => onDelete(item.id)} />
            </Td>
        </Tr>
    );
};

export default GridItem;
