import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 5fr 5fr;
    place-items: center;
    min-height: 85vh;

    img {
        display: flex;
        filter: drop-shadow(5px 5px 8px #111);
    }

    & div {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        text-align: center;
        padding: 50px;
        box-shadow: ${(props) => props.theme.boxShadow};
        border-radius: 50px;
        max-height: 57vh;

        h1 {
            margin: 0px;
            font-size: 30px;
            color: ${(props) => props.theme.Color};
        }

        form {
            margin-top: 30px;
            max-width: 300px;
            display: flex;
            flex-direction: column;
            gap: 20px;
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