import styled from "styled-components";

export const Container = styled.header`
    background: ${(props) => props.theme.headerBackgroundColor};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 24px;

    header {
        color: ${(props) => props.theme.color};
        display: flex;
        align-items: center;

        button {
            background: transparent;
            color: ${(props) => props.theme.color};
            font-size: 24px;
            border: none;
            transition: 0.5s;
        }

        h1 {
            font-size: 1rem;
        }
        
        img {
            height:3rem;
        }

        button:hover {
            opacity: 0.5;
        }

    }

    div {
        width: 30rem;
        display: flex;
        align-items: center;
        justify-content: space-around;
        font-size: 1rem;

        a {
            text-decoration: none;
            color: ${(props) => props.theme.color};
            transition: 0.5s;
        }
        
        button {
            background: transparent;
            border-radius: 40px;
            font-size: 1rem;
            transition: 1s;
            padding: 2px 10px 2px 10px;
            color: ${(props => props.theme.color)};
        }

        a:hover {
            color: #aaa;
        }

    }

`