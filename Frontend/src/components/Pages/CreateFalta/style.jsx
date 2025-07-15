import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 16px;
    gap: 16px;


    h3 {
        margin: 0px;
        font-size: 24px;
    }

    button {
        margin: 0;
        width: 85%;
    }
`

export const ListCardsAlunos = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 24px;
    max-height: 460px;
    overflow-y: auto;
    scrollbar-width: none;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        background: ${(props) => props.theme.salasBackgroundColor};
        border-radius: 16px;

        div {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            min-width: 250px;
            min-height: 100px;
            text-align: center;

            p  {
                margin: 0;
            }

            a {
                color: ${(props) => props.theme.color};
                text-decoration: none;
            }

            a:hover {
                text-decoration: underline;
            }   
        }

    }
`

export const CheckboxContainer = styled.label`
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    margin-top: 12px;
    margin-bottom: 16px;
    font-size: 16px;
    color: ${(props) => props.theme.color};
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
    display: none;
`;

export const StyledCheckbox = styled.span`
    width: 100px;
    height: 20px;
    background: #fff;
    border: 2px solid #aaa;
    border-radius: 6px;
    transition: 0.2s;
    position: relative;

    ${CheckboxContainer}:hover & {
        border-color: #555;
    }

    ${HiddenCheckbox}:checked + & {
        background-color: #4caf50;
        border-color: #4caf50;
    }

    ${HiddenCheckbox}:checked + &::after {
        content: "";
        position: absolute;
        left: 6px;
        top: 2px;
        width: 4px;
        height: 10px;
        border: solid white;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
    }
`;
