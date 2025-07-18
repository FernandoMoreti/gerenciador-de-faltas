import styled from "styled-components";

export const Button = styled.button`
    color: ${(props) => props.theme.color};
    font-size: 20px;
    /* background-color: ${(props) => props.theme.salasBackgroundColor}; */
    background-color: ${({ ativo }) => (ativo ? "#aaa" : (props) => props.theme.salasBackgroundColor)};
    color: ${(props) => props.theme.Color};
    opacity: 1;
    border: none;
    border-radius: 10px;
    width: 90%;
    height: 40px;
    transition: 0.5s;
    margin-top: 14px;

    &:hover {
        opacity: 0.3;
        border: 1px solid ${(props) => props.theme.salaBackgroundColor};
    }
`