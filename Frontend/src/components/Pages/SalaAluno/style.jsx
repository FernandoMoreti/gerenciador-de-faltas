import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr;
    gap: 10px;
    padding: 10px;
    background: ${(props) => props.theme.backgroundColor};
`