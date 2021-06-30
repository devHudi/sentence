import styled from "styled-components";
import { useHistory } from "react-router-dom";
import {
  Navigation,
  WidthLimiter,
  HorizontalWrapper,
  Card,
  Space,
} from "components";

const Wrapper = styled.div`
  padding-top: 100px;
`;

const TodayWrapper = styled.div`
  margin-bottom: 60px;
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

const MainPage = () => {
  const history = useHistory();

  return (
    <Wrapper>
      <Navigation />
      <WidthLimiter>
        <TodayWrapper>
          <Title>수고한 당신을 위한 오늘의 한 문장 🤗 </Title>
          <Subtitle>#용기 #우울 #자기계발</Subtitle>
          <Card onClick={() => history.push("/sentence-detail")} />
        </TodayWrapper>

        <HorizontalWrapper
          title="첫 사랑에 흔들리는 당신을 위한 한 문장 🥰"
          subtitle="짝사랑? 그거 독약입니다."
        >
          <Card onClick={() => history.push("/sentence-detail")} />
          <Card onClick={() => history.push("/sentence-detail")} />
          <Card onClick={() => history.push("/sentence-detail")} />
          <Card onClick={() => history.push("/sentence-detail")} />
          <Card onClick={() => history.push("/sentence-detail")} />
        </HorizontalWrapper>

        <HorizontalWrapper
          title="비오는 날 당신의 마을에 흐르는 한 문장 🌧️"
          subtitle="빗소리에 파전 말고, 문장 하나"
        >
          <Card onClick={() => history.push("/sentence-detail")} />
          <Card onClick={() => history.push("/sentence-detail")} />
          <Card onClick={() => history.push("/sentence-detail")} />
          <Card onClick={() => history.push("/sentence-detail")} />
          <Card onClick={() => history.push("/sentence-detail")} />
        </HorizontalWrapper>

        <HorizontalWrapper
          title="현재 떠오르는 문장 🚀 "
          subtitle="지금 사람들이 가장 좋아하는 문장을 발견하세요"
        >
          <Card onClick={() => history.push("/sentence-detail")} />
          <Card onClick={() => history.push("/sentence-detail")} />
          <Card onClick={() => history.push("/sentence-detail")} />
          <Card onClick={() => history.push("/sentence-detail")} />
          <Card onClick={() => history.push("/sentence-detail")} />
        </HorizontalWrapper>

        <HorizontalWrapper
          title="당신의 펀딩을 기다리는 한줄 💸"
          subtitle="아직 공개되지 않은 원석같은 책 한문장"
        >
          <Card
            onClick={() => history.push("/sentence-detail/funding")}
            funding
          />
          <Card
            onClick={() => history.push("/sentence-detail/funding")}
            funding
          />
          <Card
            onClick={() => history.push("/sentence-detail/funding")}
            funding
          />
          <Card
            onClick={() => history.push("/sentence-detail/funding")}
            funding
          />
          <Card
            onClick={() => history.push("/sentence-detail/funding")}
            funding
          />
        </HorizontalWrapper>
        <Space size={20} />
      </WidthLimiter>
    </Wrapper>
  );
};

export default MainPage;
