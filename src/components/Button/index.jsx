import styled from "styled-components";

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.7);
  color: #ffffff;
  font-size: 13pt;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

export default Button;
