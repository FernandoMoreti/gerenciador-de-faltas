import { styled } from "styled-components"

export const Container = styled.div`
  background-color: ${(prosp) => prosp.theme.background};
  display: flex;
  height: 100%;
  flex-direction: column;
  color: ${(props) => props.theme.Color};
  margin: 10px;

  #center-div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  h1 {
    text-align: center;
  }

  button:hover {
    box-shadow: 0 0 30px 0px ${(props) => props.theme.color };
  }
`

export const ContainerSchool = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto auto auto;
    width: 100%;
    border-radius: 10px;
    place-items: center;
    padding: 20px;
    gap: 20px;
    overflow-y: auto;
    scrollbar-width: none;
    border: 1px solid ${(props) => props.theme.color };
`