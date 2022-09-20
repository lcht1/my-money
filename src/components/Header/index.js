import { FiDollarSign } from "react-icons/fi";
import { Container, Content } from "./styles";

const Header = () => {
    return (
        <Container>
            <Content>
                <div>
                    <FiDollarSign size={40} />
                    <h1>My Money</h1>
                </div>

                <div>
                    <a href="/">Despesas</a>
                    <a href="/">Receitas</a>
                    <a href="/">Relatórios</a>
                </div>
            </Content>
        </Container>
    );
};

export default Header;
