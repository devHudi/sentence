import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Button } from "components";

const LightBackground = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  background: linear-gradient(to top, #edb17a, #827993);
  opacity: ${(props) => (props.transition ? 0 : 1)};
  transition: opacity 1s;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: linear-gradient(to top, #4d3f56, #000918);
`;

const AppearWrapper = styled.div`
  margin-top: ${(props) => (props.appear ? 0 : 200)}px;
  opacity: ${(props) => (props.appear ? 1 : 0)};
  transition: opacity 6s, margin-top 2s;
`;

const Title = styled.div`
  margin-bottom: 6px;
  font-size: 25pt;
  font-weight: bold;
`;

const Subtitle = styled.div`
  margin-bottom: 20px;
  font-size: 18pt;
  font-weight: lighter;
`;

const EmotionGrid = styled.div`
  display: grid;
  grid-template-columns: 100px 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
  row-gap: 55px;
  column-gap: 10px;
`;

const EmotionWrapper = styled.button`
  width: 100px;
  height: 100px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 50px;
  background-color: transparent;
  font-size: 40pt;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
    transform: scale(1.08);
  }
`;

const EmotionCaption = styled.div`
  margin-top: 13px;
  width: 100px;
  text-align: center;
  word-wrap: break-word;
`;

const Skip = styled.div`
  margin-top: 60px;
  text-align: right;
`;

const Emotion = ({ emoji, caption, onClick }) => {
  return (
    <div onClick={onClick}>
      <EmotionWrapper>{emoji}</EmotionWrapper>
      <EmotionCaption>{caption}</EmotionCaption>
    </div>
  );
};

const EmotionPage = () => {
  const history = useHistory();
  const [transition, setTransition] = useState(false);
  const [appear, setAppear] = useState(false);

  useEffect(() => {
    setTransition(true);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setAppear(true);
    }, 1500);
  }, []);

  return (
    <>
      {!appear && <LightBackground transition={transition} />}
      <Wrapper>
        <AppearWrapper appear={appear}>
          <Title>오랜만이에요, 동현님.</Title>
          <Subtitle>오늘 기분은 좀 어떠세요?</Subtitle>
          <EmotionGrid>
            <Emotion
              emoji="😊"
              caption="행복해요"
              onClick={() => history.push("/sentence-detail")}
            />
            <Emotion
              emoji="😥"
              caption="슬퍼요"
              onClick={() => history.push("/sentence-detail")}
            />
            <Emotion
              emoji="😡"
              caption="화가나요"
              onClick={() => history.push("/sentence-detail")}
            />
            <Emotion
              emoji="😔"
              caption="피곤해요"
              onClick={() => history.push("/sentence-detail")}
            />
            <Emotion
              emoji="🥰"
              caption={
                <>
                  사랑에
                  <br /> 빠졌어요
                </>
              }
              onClick={() => history.push("/sentence-detail")}
            />
            <Emotion
              emoji="🤔"
              caption="고민이 많아요"
              onClick={() => history.push("/sentence-detail")}
            />
            <Emotion
              emoji="😐"
              caption="그냥 그래요"
              onClick={() => history.push("/sentence-detail")}
            />
            <Emotion
              emoji="😴"
              caption="졸려요"
              onClick={() => history.push("/sentence-detail")}
            />
            <Emotion
              emoji="😵"
              caption="아파요"
              onClick={() => history.push("/sentence-detail")}
            />
            <Emotion
              emoji="😳"
              caption="창피해요"
              onClick={() => history.push("/sentence-detail")}
            />
            <Emotion
              emoji="🥺"
              caption="간절해요"
              onClick={() => history.push("/sentence-detail")}
            />
            <Emotion
              emoji="😱"
              caption="좌절했어요"
              onClick={() => history.push("/sentence-detail")}
            />
          </EmotionGrid>
          <Skip>
            <Button onClick={() => history.push("/main")}>건너뛰기</Button>
          </Skip>
        </AppearWrapper>
      </Wrapper>
    </>
  );
};

export default EmotionPage;
