import { useState, useEffect } from "react";
import styled from "styled-components";
import { TextField, Comment, Space } from "components";

const Fullpage = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-image: url("https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80");
  background-size: cover;
  background-position: center;
`;

const Dimmer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #000000;
  opacity: ${(props) => props.opacity};
`;

const FullpageText = styled.div`
  max-width: 700px;
  line-height: 1.5;
  font-family: "Nanum Myeongjo", serif;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  font-size: 30pt;
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

const DetailPage = ({ isFunding }) => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      setOpacity((window.scrollY / window.innerHeight) * 1.2);
    });
  }, []);

  return (
    <>
      <Fullpage>
        <Dimmer opacity={opacity}></Dimmer>
        <FullpageText>
          빗물이 모여야 강물이 되지만 눈물이 모였을 때 서글픔은 바다보다 깊었다.
        </FullpageText>
      </Fullpage>
      <div>
        <DetailSection>
          <Title>책 제목 (Book Title)</Title>
          <Subtitle>
            책 부제목 | 이성인 작가 | 세인트 출판사 | 1998. 12. 28
          </Subtitle>
          <BookCover src="https://mblogthumb-phinf.pstatic.net/MjAyMDA3MTRfNzAg/MDAxNTk0Njk2ODE2MTIy.pv4Ij7GFJwXLBKhwL2Jjcj59WdDc5hfdmzdVjUycDHkg.x51bDgp1jKX3SuQsWoHdWIu9OcaBOrpy5gtWmr9niWAg.PNG.zencstory/SE-b3c3d58a-e05d-4285-a9bb-8a9c67e07643.png?type=w800" />
          <BookDescription>
            가지에 황금시대를 기관과 사막이다. 가장 만물은 그들은 천하를
            철환하였는가? 따뜻한 얼마나 트고, 밥을 너의 이것이다. 피가
            소담스러운 청춘은 크고 군영과 만천하의 무엇을 얼마나 긴지라 뿐이다.
            길지 구하지 트고, 있는 끓는 아름다우냐? 것은 있음으로써 할지라도
            교향악이다. 위하여, 쓸쓸한 트고, 칼이다.
          </BookDescription>
          <CommentWidth>
            <TextField placeholder="댓글을 입력하세요" />
            <Space size={20} />
            <Comment> 책 정말 추천드립니다. </Comment>
            <Comment> 심금을 울리는 책 입니다. </Comment>
            <Comment> 울었다. </Comment>
            <Comment> ㅠㅠ </Comment>
          </CommentWidth>
        </DetailSection>
      </div>
    </>
  );
};

export default DetailPage;
