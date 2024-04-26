import Button from "@/components/commonComponents/Button";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Survey = () => {
  return (
    <>
      <Wrapper>
        <SurveySection>
          <h1>어떤 셰프의 레시피가 더 만족스러우셨나요?</h1>
          <h2>서비스 개선에 큰 도움이 됩니다.</h2>
          <Button typeState={"confirmBtn"}>Chat GPT</Button>
          <Button typeState={"confirmBtn"}>Gemini</Button>
          <h1>기타 의견을 작성해주세요.</h1>
          <textarea />
        </SurveySection>
        <ButtonSection>
          <Link to="/">
            <Button typeState={"confirmBtn"}>홈으로</Button>
          </Link>
        </ButtonSection>
      </Wrapper>
    </>
  );
};

export default Survey;

const Wrapper = styled.div`
  width: 100%;
`;

const SurveySection = styled.section``;

const ButtonSection = styled.section`
  position: fixed;
  bottom: 1.2rem;
`;
