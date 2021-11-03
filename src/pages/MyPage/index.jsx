import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { Navigation, WidthLimiter, Card } from "components";
import Tagcloud from "./Tagcloud";

const Wrapper = styled.div`
  display: flex;
  padding-top: 100px;
`;

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`;

const ProfileImage = styled.img`
  margin-right: 20px;
  width: 150px;
  height: 150px;
  border-radius: 75px;
`;

const Name = styled.div`
  margin-bottom: 5px;
  font-size: 20pt;
  font-weight: bold;
`;

const Description = styled.div`
  margin-bottom: 15px;
  font-size: 14pt;
  font-weight: normal;
  color: rgba(255, 255, 255, 0.9);
`;

const Numbers = styled.div`
  font-size: 12pt;
  font-weight: lighter;
`;

const Title = styled.div`
  margin-bottom: 15px;
  font-size: 15pt;
  font-weight: bold;
  text-align: left;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 20px;
`;

const Profile = () => {
  return (
    <ProfileWrapper>
      <ProfileImage src="https://hudi.blog/static/profile-00094cdd94690e21e1f412dbfd4d6656.png" />
      <div>
        <Name>조동현</Name>
        <Description> 책을 좋아하는 서비스 개발자입니다. </Description>
        <Numbers> 좋아한 문장 35 | 작성한 문장 32 </Numbers>
      </div>
    </ProfileWrapper>
  );
};

const MyPage = () => {
  const history = useHistory();

  return (
    <Wrapper>
      <Navigation />
      <WidthLimiter small>
        <Profile />

        <Tagcloud />

        <Title>✏️ 동현님이 작성하신 문장</Title>
        <Grid>
          <Card onClick={() => history.push("/sentence-detail")} />
          <Card onClick={() => history.push("/sentence-detail")} />
          <Card onClick={() => history.push("/sentence-detail")} />
          <Card onClick={() => history.push("/sentence-detail")} />
          <Card onClick={() => history.push("/sentence-detail")} />
          <Card onClick={() => history.push("/sentence-detail")} />
          <Card onClick={() => history.push("/sentence-detail")} />
          <Card onClick={() => history.push("/sentence-detail")} />
        </Grid>
      </WidthLimiter>
    </Wrapper>
  );
};

export default MyPage;
