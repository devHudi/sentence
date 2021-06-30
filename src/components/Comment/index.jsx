import styled from "styled-components";
import profileImage from "assets/images/profile.png";

const Wrapper = styled.div`
  margin-bottom: 15px;
  display: flex;
  align-items: center;
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
