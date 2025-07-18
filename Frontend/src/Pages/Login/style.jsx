import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;

    form {
        display: flex;
        flex-direction: column;
        gap: 40px;
        padding: 80px 50px;
        text-align: center;
        box-shadow: ${(props) => props.theme.boxShadow};
        border-radius: 50px;
    

        h1 {
            text-align: center;
            margin: 0px;
        }

        button {
            padding: 10px 40px;
            background-color: transparent;
            font-size: 18px;
            text-align: center;
            border-radius: 10px;
            cursor: pointer;
            color: ${(props) => props.theme.color};
            transition: 0.5s;
        }

        button:hover {
            background-color: ${(props) => props.theme.buttonBackground};
            color: ${(props) => props.theme.color};
        }
    }
`