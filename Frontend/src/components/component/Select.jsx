import styled from "styled-components";

export default styled.select`
    padding: 8px 16px;
    font-size: 18px;
    text-align: center;
    text-indent: 0;
    color: ${(props) => props.theme.color};
    border-radius: 10px;
    background: transparent;
    border-top: 2px solid #111;
    border-left: 2px solid #111;

    option {
        text-align: center;
        color: #111;
    }
`