import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { HiSearch } from "react-icons/hi";

const Wrapper = styled.nav`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  padding: 20px;
  width: 100%;
  background-color: #000000;
  z-index: 999;
`;

const MenuWrapper = styled.div`
  display: inline-block;
  margin: 0 auto;
  display: flex;
  font-size: 20px;
`;

const Menu = styled.div`
  display: flex;
  margin-right: 40px;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: color 0.3s;

  &:last-child {
    margin: 0;
  }

  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`;

const Logo = styled.div`
  position: absolute;
  top: 18px;
  left: 20px;
  height: 24px;
  font-family: "Nanum Myeongjo", serif;
`;

const Profile = styled.img`
  position: absolute;
  top: 15px;
  right: 20px;
  background-color: gray;
  border-radius: 15px;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

const Navigation = () => {
  const history = useHistory();

  return (
    <Wrapper>
      <Logo> 센 / 텐 / 스 </Logo>
      <MenuWrapper>
        <Menu onClick={() => history.push("/main")}>홈</Menu>
        <Menu onClick={() => history.push("/mypage")}>내 서재</Menu>
        <Menu onClick={() => history.push("/editor")}>글귀 작성</Menu>
        <Menu>
          <HiSearch />
          검색
        </Menu>
      </MenuWrapper>
      <Profile
        src="https://hudi.blog/static/profile-49f9435bde9ff6068fc6a872d6412538.png"
        onClick={() => history.push("/mypage")}
      />
    </Wrapper>
  );
};

export default Navigation;
