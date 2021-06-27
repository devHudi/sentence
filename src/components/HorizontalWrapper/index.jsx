import styled from "styled-components";

const Wrapper = styled.div`
  margin-bottom: 60px;
`;

const Row = styled.div`
  display: flex;
  overflow-x: scroll;

  & > div {
    flex-basis: 300px;
    flex-shrink: 0;
  }
`;

const Title = styled.div`
  margin-bottom: 8px;
  font-size: 20pt;
  font-weight: bold;
`;

const Subtitle = styled.div`
  margin-bottom: 16px;
  font-size: 12pt;
  color: rgba(255, 255, 255, 0.6);
`;

const HorizontalWrapper = ({ title, subtitle, children }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <Row>{children}</Row>
    </Wrapper>
  );
};

export default HorizontalWrapper;
