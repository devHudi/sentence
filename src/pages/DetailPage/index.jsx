import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { IoIosArrowDown } from "react-icons/io";
import { FiArrowLeft } from "react-icons/fi";
import { AiFillHome } from "react-icons/ai";
import { TextField, Comment, Space, Button } from "components";
import Like from "./Like";
import sentences from "assets/data/sentences.json";

const Fullpage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url("https://source.unsplash.com/random");
  background-size: cover;
  background-position: center;
`;

const BackArrowWrapper = styled.div`
  position: fixed;
  top: 15px;
  left: 15px;
  font-size: 15pt;
  cursor: pointer;
  z-index: 999;
`;

const HomeWrapper = styled.div`
  position: fixed;
  top: 15px;
  right: 15px;
  font-size: 15pt;
  cursor: pointer;
  z-index: 999;
`;

const Dimmer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`;

const dimmerFade = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const ScrollDimmer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #000000;
  opacity: ${(props) => props.opacity};
  animation: ${dimmerFade} 2s;
`;

const textFade = keyframes`
  0% {
    margin-top: 100px;
    opacity: 0;
  }
  100% {
    margin-top: 0;
    opacity: 1;
  }
`;

const FullpageText = styled.div`
  max-width: 700px;
  line-height: 1.5;
  font-family: "Nanum Myeongjo", serif;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  font-size: 30pt;
  text-align: center;
  opacity: 0;
  animation: ${textFade} 2s forwards;
  animation-delay: 0.3s;
`;

const arrowFade = keyframes`
  0% {
    bottom: 20px;
    opacity: 0;
  }

  100% {
    bottom: 10px;
    opacity: 1;
  }
`;

const ArrowWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  width: 100%;
  text-align: center;
  opacity: 0;
  font-size: 15pt;
  animation: ${arrowFade} 3s forwards;
  animation-delay: 1.5s;
`;

const DetailSection = styled.section`
  padding: 150px;
  text-align: center;
`;

const Title = styled.h1`
  margin-bottom: 15px;
  font-size: 25pt;
  font-weight: bold;
`;

const Subtitle = styled.h1`
  margin-bottom: 30px;
  font-size: 18pt;
  font-weight: lighter;
`;

const BookCover = styled.img`
  margin-bottom: 30px;
  width: 500px;
`;

const BookDescription = styled.div`
  margin: 0 auto;
  margin-bottom: 20px;
  max-width: 500px;
  font-size: 15pt;
  font-weight: lighter;
  line-height: 1.5;
  text-align: left;
`;

const CommentWidth = styled.div`
  width: 500px;
  margin: 0 auto;
`;

const FundingWrapper = styled.div`
  width: 500px;
  margin: 0 auto;
  padding-bottom: 50px;
  text-align: left;
  & ${Button} {
    margin-bottom: 10px;
  }
`;

const FundingRemain = styled.div`
  font-size: 15pt;
`;

const FundingProgressWrapper = styled.div`
  margin: 10px 0;
  position: relative;
  width: 100%;
  height: 15px;
  border: 1px solid rgba(255, 255, 255, 0.8);
`;

const FundingProgressBar = styled.div`
  width: 50%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.7);
`;

const FundingPercentage = styled.div`
  margin-bottom: 20px;
`;

const CommentFormWrapper = styled.div`
  display: flex;
`;

const CommentButton = styled(Button)`
  margin-left: 10px;
  padding: 0px;
  height: 43px;
  flex-basis: 100px;
`;

const LikeWrapper = styled.div`
  margin: 20px auto;
  max-width: 500px;
  text-align: right;
`;

const Funding = () => {
  return (
    <FundingWrapper>
      <FundingRemain>펀딩 50일 남음</FundingRemain>
      <FundingProgressWrapper>
        <FundingProgressBar />
      </FundingProgressWrapper>
      <FundingPercentage>
        342,520원 펀딩 / 50% 달성 / 242 명의 출간 희망자
      </FundingPercentage>
      <Button> 펀딩하기 </Button>
      <Button> 공유하기 </Button>
    </FundingWrapper>
  );
};

const DetailPage = ({ isFunding, fromEmotion }) => {
  const history = useHistory();
  const [opacity, setOpacity] = useState(0);
  const [commentInput, setCommentInput] = useState("");
  const [comments, setComments] = useState([]);

  const [sentence, setSentence] = useState("");

  const addComment = (comment) => {
    setComments([...comments, comment]);
  };

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      setOpacity((window.scrollY / window.innerHeight) * 1.2);
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setSentence(
      sentences[Math.floor(Math.random() * (sentences.length - 1) + 0)]
    );
  }, []);

  return (
    <>
      <Fullpage>
        <Dimmer>
          <FullpageText>{sentence}</FullpageText>
        </Dimmer>
        <ArrowWrapper>
          <IoIosArrowDown />
        </ArrowWrapper>
        <BackArrowWrapper
          onClick={() => {
            if (fromEmotion) {
              history.push("/emotion");
            } else {
              history.push("/main");
            }
          }}
        >
          <FiArrowLeft />
        </BackArrowWrapper>
        {fromEmotion && (
          <HomeWrapper
            onClick={() => {
              history.push("/main");
            }}
          >
            <AiFillHome />
          </HomeWrapper>
        )}
        <ScrollDimmer opacity={opacity}></ScrollDimmer>
      </Fullpage>
      <div>
        <DetailSection>
          <Title>나는 그래도 오늘을 살아간다</Title>
          <Subtitle>
            힘겨운 오늘, 그래도 아름다운 | 이성인 작가 | 세인트 출판사 | 1998.
            12. 28
          </Subtitle>
          <BookCover src="https://mblogthumb-phinf.pstatic.net/MjAyMDA3MTRfNzAg/MDAxNTk0Njk2ODE2MTIy.pv4Ij7GFJwXLBKhwL2Jjcj59WdDc5hfdmzdVjUycDHkg.x51bDgp1jKX3SuQsWoHdWIu9OcaBOrpy5gtWmr9niWAg.PNG.zencstory/SE-b3c3d58a-e05d-4285-a9bb-8a9c67e07643.png?type=w800" />

          {isFunding && <Funding />}

          <BookDescription>
            가지에 황금시대를 기관과 사막이다. 가장 만물은 그들은 천하를
            철환하였는가? 따뜻한 얼마나 트고, 밥을 너의 이것이다. 피가
            소담스러운 청춘은 크고 군영과 만천하의 무엇을 얼마나 긴지라 뿐이다.
            길지 구하지 트고, 있는 끓는 아름다우냐? 것은 있음으로써 할지라도
            교향악이다. 위하여, 쓸쓸한 트고, 칼이다.
          </BookDescription>

          <LikeWrapper>
            <Like />
          </LikeWrapper>

          <CommentWidth>
            <CommentFormWrapper>
              <TextField
                placeholder="댓글을 입력하세요"
                onChange={(e) => setCommentInput(e.target.value)}
              />
              <CommentButton
                onClick={() => {
                  addComment(commentInput);
                }}
              >
                댓글작성
              </CommentButton>
            </CommentFormWrapper>
            <Space size={20} />
            <Comment> 책 정말 추천드립니다. </Comment>
            <Comment> 심금을 울리는 책 입니다. </Comment>
            <Comment> 울었다. </Comment>
            <Comment> 이성인 작가, 그는 신인가? </Comment>
            {comments.map((comment) => {
              return <Comment>{comment}</Comment>;
            })}
          </CommentWidth>
        </DetailSection>
      </div>
    </>
  );
};

export default DetailPage;
