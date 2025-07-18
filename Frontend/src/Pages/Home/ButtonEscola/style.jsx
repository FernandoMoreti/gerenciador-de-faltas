import styled from "styled-components";

export const Container = styled.button`

    height: 180px;
    width: 180px;
    border: 1px solid ${(props) => props.theme.color};
    border-radius: 10px;
    background-color: transparent;
    color: #111;
    cursor: pointer;
    transition: 0.5s;

    img {
        width: 160px;
        height: 80px;
        object-fit: contain;
    }

    p {
        background-color: #ddd;
        padding: 10px;
    }
`