import styled from "styled-components";
import { Navigation, Space, TextField, Button } from "components";
import Preview from "./Preview";

const PageWrapper = styled.div`
  margin: 0 auto;
  max-width: 800px;
  height: 100%;
  display: flex;
  align-items: center;
`;

const FlexWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FormWrapper = styled.div`
  margin-left: 40px;
  width: 50%;
`;

const EditorPage = () => {
  return (
    <>
      <Navigation />
      <PageWrapper>
        <FlexWrapper>
          <Preview image="https://source.unsplash.com/random" text="시발머" />
          <FormWrapper>
            <TextField placeholder="책 제목" />
            <TextField placeholder="출판사" />
            <TextField placeholder="선정 이유" />
            <Space size={20} />
            <Button>게시하기</Button>
          </FormWrapper>
        </FlexWrapper>
      </PageWrapper>
    </>
  );
};

export default EditorPage;
