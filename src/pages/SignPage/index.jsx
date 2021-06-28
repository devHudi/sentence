import styled, { keyframes } from "styled-components";
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

const leftFade = keyframes`
  0% {
    opacity: 0;
    margin-bottom: -90px;
  }

  100% {
    opacity: 1;
    margin-bottom: -60px;
  }
`;

const rightFade = keyframes`
  0% {
    opacity: 0;
    margin-bottom: 180px;
  }

  100% {
    opacity: 1;
    margin-bottom: 150px;
  }
`;

const VerticalText = styled.div`
  writing-mode: vertical-rl;
  text-orientation: upright;
  font-family: "Nanum Myeongjo", serif;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const Title = styled.div`
  letter-spacing: 5px;
  margin-left: 10px;
  font-size: 30pt;
  opacity: 0;
  animation: ${rightFade} 3s forwards;
  animation-delay: 0.5s;
`;

const Subtitle = styled.div`
  letter-spacing: 5px;
  font-size: 15pt;
  animation: ${leftFade} 3s forwards;
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
            <TextField placeholder="이메일" />
            <TextField placeholder="패스워드" type="password" />
            <Space size={15} />
            <Button onClick={() => history.push("/emotion")}> 로그인 </Button>
          </div>
        </div>
      </Divider>
    </Wrapper>
  );
};

export default SignPage;
