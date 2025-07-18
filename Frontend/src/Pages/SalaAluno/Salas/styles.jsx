import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: ${(props) => props.theme.salasBackgroundColor};
    border-radius: 10px;
    height: 80vh; //85.5
    color: ${(props) => props.theme.color};
    text-align: center;
    overflow-y: auto;
    scrollbar-width: none;
    border: 10px solid ${(props) => props.theme.salasBackgroundColor};
    
    a {
        display: flex;
        justify-content: center;
        text-decoration: none;
        color: #111;
        margin: 10px 10px;
        padding: 15px 10px;
        border-radius: 10px;
        background-color: aqua;
        transition: 0.5s;
    }

    img {
        width: 20px;
        background-color: #111;
    }

    a:hover {
        background-color: #00ffffb3;
    }
`