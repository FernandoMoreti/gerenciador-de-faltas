import styled from "styled-components";

export const Container = styled.div`
  max-width: 600px;
  margin: 30px auto;
  padding: 20px;
  border-radius: 12px;
  background-color: ${(props) => props.theme?.backgroundColor || "#f9f9f9"};
  color: ${(props) => props.theme?.color || "#333"};
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Foto = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
`;

export const Info = styled.div`
  h2 {
    margin: 0;
    font-size: 24px;
  }

  p {
    margin-top: 6px;
    font-size: 16px;
  }
`;

export const FaltasSection = styled.div`
  margin-top: 30px;

  h3 {
    margin-bottom: 10px;
    font-size: 20px;
  }

  ul {
    list-style: none;
    padding-left: 0;
  }

  li {
    padding: 6px 0;
    border-bottom: 1px solid #ccc;
    font-size: 15px;
  }

  p {
    font-style: italic;
    color: #666;
  }
`;