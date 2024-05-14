import Button from "@/components/commonComponents/Button";
import Text from "@/components/commonComponents/Text";
import { theme } from "@/styles/theme";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CustomerFeedback = () => {
  const navigate = useNavigate();
  const gotoMain = () => {
    navigate("/main");
  };
  return (
    <FeedBackContainer>
      <Text font={"title3"}>어떤 셰프의 레시피가 더 만족스러우셨나요?</Text>
      <Text font={"body3"} color={theme.colors.grey1}>
        서비스 개선에 큰 도움이 됩니다
      </Text>
      <ButtonSection>
        <Button typeState={"completeBtn"}>
          <Text font={"button1"}>ChatGPT</Text>
        </Button>
        <Button typeState={"disproveBtn"}>
          <Text font={"button1"}>Gemini</Text>
        </Button>
      </ButtonSection>
      <Text font={"title3"}>기타 의견을 작성해주세요.(선택)</Text>
      <TextAreaSection>
        <textarea></textarea>
      </TextAreaSection>
      <Button typeState={"completeBtn"} onClick={gotoMain}>
        <Text font={"button1"}>홈으로</Text>
      </Button>
    </FeedBackContainer>
  );
};

const FeedBackContainer = styled.div`
  margin: 9rem;
`;
const ButtonSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 3rem;
  margin-bottom: 6rem;
`;
const TextAreaSection = styled.div`
  margin-top: 1rem;
  margin-bottom: 10rem;
  textarea {
    width: 100%;
    height: 15rem;
    outline: none;
    border: 1px solid ${theme.colors.grey2};
    border-radius: 1rem;
    padding: 1rem;
  }
`;
export default CustomerFeedback;
