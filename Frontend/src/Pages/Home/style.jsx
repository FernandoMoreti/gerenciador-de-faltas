import { styled } from "styled-components"

export const Container = styled.div`
  background-color: ${(prosp) => prosp.theme.background};
  display: flex;
  height: 85.5vh;
  flex-direction: column;
  color: ${(props) => props.theme.Color};
  margin: 10px;

  div {
    display: grid;
    grid-template-columns: auto auto auto auto auto auto;
    border-radius: 10px;
    place-items: center;
    padding: 20px;
    gap: 20px;
    overflow-y: auto;
    scrollbar-width: none;
    background-color: ${(props) => props.theme.salasBackgroundColor};
    height: 57vh;
  }

  h1 {
    text-align: center;
  }

  button:hover {
    box-shadow: ${(props) => props.theme.boxShadow};
  }
`