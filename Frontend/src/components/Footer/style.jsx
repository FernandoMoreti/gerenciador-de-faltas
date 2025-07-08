import styled from "styled-components";

export const Container = styled.footer`
    background-color: ${(props) => props.theme.footerBackgroundColor};
    display: flex;
    align-items: center;
    justify-content: center;
    max-height: 4.9vh;
    color: ${(props) => props.theme.color};
`