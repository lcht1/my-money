import styled from "styled-components";

export const Container = styled.header`
    background: #5429cc;
    color: #fff;
`;

export const Content = styled.div`
    max-width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 2rem;

    div {
        display: flex;
        align-items: center;
        gap: 20px;

        a {
            cursor: pointer;
            text-decoration: none;
            color: inherit;
            display: block;
            transition: all 2s;

            :hover {
                :after {
                    content: "";
                    display: block;
                    height: 2px;
                    width: 100%;
                    background-color: #fff;
                }
            }
        }
    }
`;
