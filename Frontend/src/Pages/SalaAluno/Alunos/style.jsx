import styled from "styled-components";

export const Container = styled.div`
    max-height: 80vh;
    border: 10px solid ${(props) => props.theme.salasBackgroundColor};
    border-radius: 10px;
    background-color: ${(props) => props.theme.salasBackgroundColor};

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 18px;
        margin: 0px 30px;

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
        display: flex;
        flex-direction: column;
        overflow-y: auto;
        max-height: 70vh;
        scrollbar-width: none;
        gap: 24px;
        margin: 24px 0;

        div {
            margin: 0 16px;
        }
        
        a {
            background: transparent;
            color: ${(props) => props.theme.color};
            padding: 0;
        }

        a:hover {
            text-decoration: underline;
            background: none;
            opacity: 0.6;
        }
    }

    #create-aluno {
        display: flex;
        justify-content: center;
        text-decoration: none;
        color: #111;
        margin: 0 16px;
        margin-bottom: 24px;
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