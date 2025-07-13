import styled from "styled-components";

export const Container = styled.div`
    max-height: 80vh;
    border: 10px solid ${(props) => props.theme.salasBackgroundColor};
    border-radius: 10px;
    background-color: ${(props) => props.theme.salasBackgroundColor};

    div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 18px;
        margin: 0px 20px;

        a {
            text-decoration: none;
            color: #111;
            padding: 10px 10px;
            border-radius: 10px;
            background-color: aqua;
            transition: 0.5s;
        }
    }

    article {
        overflow-y: auto;
        max-height: 70vh;
        scrollbar-width: none;
    }

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

    a:hover {
        background-color: #00ffffb3;
    }

    button:hover {
        background-color: #aaa;
        cursor: pointer;
    }
`