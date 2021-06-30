import styled, { keyframes } from "styled-components";
import profileImage from "assets/images/profile.png";

const commentFade = keyframes`
  0% {
    bottom: -10px;
    opacity: 0;
  }

  100% {
    bottom: 0px;
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  animation: ${commentFade} 1s forwards;
`;

const Profile = styled.img`
  margin-right: 10px;
  width: 30px;
  height: 30px;
  border-radius: 15px;
`;

const Content = styled.div``;

const Comment = ({ children }) => {
  return (
    <Wrapper>
      <Profile src={profileImage} />
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default Comment;
