import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    gap: 30px;
    height: 85vh;
    background-color: ${(props) => props.theme.backgroundColor};

    h1 {
        margin: 0px;
        font-size: 200px;
    }

    h2 {
        margin: 0px;
        margin-bottom: 100px;
        font-size: 80px;
    }

`