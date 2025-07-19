import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  border-radius: 12px;
  background-color: ${(props) => props.theme?.backgroundColor || "#f9f9f9"};
  height: 100%;
  color: ${(props) => props.theme?.color};
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  div {
    display: flex;
    align-items: center;
  }
`;

export const Foto = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
`;

export const Info = styled.div`

  display: flex;
  flex-direction: column;

  h2 {
    margin: 0;
    font-size: 24px;
  }

  p {
    margin-top: 6px;
    font-size: 16px;
  }
`;

export const DivChart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`

export const FaltasSection = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 500px;

  h3 {
    font-size: 20px;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin: 0;
    padding: 16px 0;
    list-style: none;
    overflow-y: auto;
    max-height: 500px;
    scrollbar-width: none;
  }

  li {
    display: flex;
    flex-direction: column;
    padding: 16px 8px;
    font-size: 15px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 16px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
    gap: 8px;
  }

  p {
    font-style: italic;
    color: #666;
  }
`;