import styled from "styled-components";

const WidthLimiter = styled.div`
  width: 100%;
  max-width: ${(props) => (props.small ? 700 : 1024)}px;
  margin: 0 auto;
`;

export default WidthLimiter;
