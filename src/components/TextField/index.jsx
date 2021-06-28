import styled from "styled-components";

const TextField = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  width: 100%;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.7);
  outline: none;
  background-color: transparent;
  color: #ffffff;
  font-size: 14pt;
  font-weight: lighter;

  ::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
`;

export default TextField;
