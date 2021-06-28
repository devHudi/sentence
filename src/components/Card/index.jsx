import styled from "styled-components";
import { AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";

const Wrapper = styled.div`
  position: relative;
  margin-right: 20px;
  height: 200px;
  border-radius: 10px;
  background-image: url("https://i.pinimg.com/736x/1e/09/22/1e0922a00c2f87c75de1412b4f75f684.jpg");
  background-size: cover;
  background-position: center;
  cursor: pointer;
`;

const Dimmer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Badge = styled.div`
  position: absolute;
  bottom: 10px;
  left: 15px;
  font-size: 8pt;
  padding: 5px;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.5);
  color: #f8f9fa;
  text-shadow: none;
  display: inline-block;
`;

const Content = styled.div`
  padding: 15px;
  line-height: 1.6;
  text-align: center;
  text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
  font-size: 14pt;
`;

const LabelWrapper = styled.div`
  display: inline-block;
  position: absolute;
  bottom: 10px;
  right: 20px;
`;

const Label = styled.span`
  margin-left: 10px;
  font-size: 10pt;

  &:first-child {
    margin: 0;
  }
`;

const FundingWrapper = styled.div`
  position: absolute;
  bottom: 10px;
  right: 15px;
`;

const FundingProgressWrapper = styled.div`
  position: relative;
  width: 170px;
  height: 7px;
  border: 1px solid rgba(255, 255, 255, 0.8);
`;

const FundingProgressTextWrapper = styled.div`
  position: absolute;
  width: 170px;
  bottom: -2px;
  display: flex;
  justify-content: space-between;
`;

const FundingProgressText = styled.div`
  margin-bottom: 10px;
  font-size: 8pt;
`;

const FundingProgressBar = styled.div`
  width: 50%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
`;

const Card = ({ funding, onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <Dimmer>
        <Content>
          빗물이 모여야 강물이 되지만 눈물이 모였을 때 서글픔은 바다보다 깊었다.
        </Content>
        {funding && (
          <FundingWrapper>
            <FundingProgressWrapper>
              <FundingProgressTextWrapper>
                <FundingProgressText>50% / 435,200원</FundingProgressText>
                <FundingProgressText>21. 8. 2 마감</FundingProgressText>
              </FundingProgressTextWrapper>
              <FundingProgressBar />
            </FundingProgressWrapper>
          </FundingWrapper>
        )}
        {!funding && (
          <LabelWrapper>
            <Label>
              <AiFillHeart /> 30
            </Label>
            <Label>
              <FaComment /> 40
            </Label>
          </LabelWrapper>
        )}
        {funding && <Badge>FUNDING</Badge>}
      </Dimmer>
    </Wrapper>
  );
};

export default Card;
