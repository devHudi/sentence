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

  &:hover {
  }

  &:last-child {
    margin: 0;
  }
`;

const LogoImage = styled.img`
  position: absolute;
  top: 18px;
  left: 20px;
  height: 24px;
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
      <LogoImage src="http://placehold.it/150x24" />
      <MenuWrapper>
        <Menu onClick={() => history.push("/main")}>홈</Menu>
        <Menu onClick={() => history.push("/mypage")}>내 서재</Menu>
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
