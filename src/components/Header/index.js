import { FiDollarSign } from "react-icons/fi";
import { Container, Content, Logo } from "./styles";

const Header = () => {
    return (
        <Container>
            <Content>
                <Logo>
                    <a href="/">
                        <FiDollarSign size={40} />
                        <h1>My Money</h1>
                    </a>
                </Logo>
            </Content>
        </Container>
    );
};

export default Header;
