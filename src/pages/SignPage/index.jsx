import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { TextField, Button, Space } from "components";

const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(to top, #edb17a, #827993);
`;

const Divider = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

const VerticalText = styled.div`
  writing-mode: vertical-rl;
  text-orientation: upright;
  font-family: "Nanum Myeongjo", serif;
`;

const Title = styled.div`
  letter-spacing: 5px;
  margin-left: 10px;
  margin-top: -150px;
  font-size: 30pt;
`;

const Subtitle = styled.div`
  letter-spacing: 5px;
  margin-bottom: -60px;
  font-size: 15pt;
`;

const SignPage = () => {
  const history = useHistory();

  return (
    <Wrapper>
      <Divider>
        <div>
          <Subtitle>
            <VerticalText>당신을 위한 단 한 문장</VerticalText>
          </Subtitle>
          <Title>
            <VerticalText>센/텐/스</VerticalText>
          </Title>
        </div>
        <div>
          <div>
            <TextField />
            <TextField />
            <Space size={15} />
            <Button onClick={() => history.push("/emotion")}> 로그인 </Button>
          </div>
        </div>
      </Divider>
    </Wrapper>
  );
};

export default SignPage;
