import React from "react";

import { Balance, Box, Container, GeneralInfos } from "./styles";

const Resume = ({ income, expense, total }) => {
    return (
        <Container>
            <GeneralInfos>
                <Box>
                    <Balance>
                        <span>Receita mensal</span>
                        <span className="income">
                            {income && income?.replace(".", ",")}
                        </span>
                    </Balance>
                </Box>
                <Box>
                    <Balance>
                        <span>Despesa mensal</span>
                        <span className="outcome">
                            {expense && expense?.replace(".", ",")}
                        </span>
                    </Balance>
                </Box>
                <Box>
                    <Balance>
                        <span>Saldo total</span>
                        <span className="total">
                            {total && total?.replace(".", ",")}
                        </span>
                    </Balance>
                </Box>
            </GeneralInfos>
        </Container>
    );
};

export default Resume;
