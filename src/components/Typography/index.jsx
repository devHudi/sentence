import styled from "styled-components";

const Typography = styled.div`
  ${(props) => props.title && "font-size: 15pt;"}
  ${(props) => props.subtitle && "font-size: 12pt;"}
`;

export default Typography;
