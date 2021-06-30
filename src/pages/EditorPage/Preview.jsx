import styled from "styled-components";

const Wrapper = styled.div`
  width: 500px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  border-radius: 10px;
`;

const TextField = styled.input`
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  text-align: center;
  font-size: 25pt;
  font-family: "Nanum Myeongjo", serif;
  color: #ffffff;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.8);

  ::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
`;

const Preview = ({ image, text }) => {
  return (
    <Wrapper src={image}>
      <TextField placeholder="글귀를 입력하세요" rows="3" cols="10" />
    </Wrapper>
  );
};

export default Preview;
