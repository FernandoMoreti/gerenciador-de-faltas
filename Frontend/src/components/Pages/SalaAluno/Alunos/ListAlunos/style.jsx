import styled from "styled-components";

export const Container = styled.button`
    display: flex;
    width: 98%;
    font-size: 18px;
    margin: 15px 10px;
    padding: 0px 10px;
    border-radius: 15px;
    background-color: ${(props) => props.theme.backgroundColor};
    transition: 0.5s;
    color: ${props => props.theme.color};

    #second-p {
        width: 100%;
        display: flex;
        justify-content: center;
    }

`