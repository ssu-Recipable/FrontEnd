import Button from "@/components/commonComponents/Button";
import Text from "@/components/commonComponents/Text";
import { theme } from "@/styles/theme";
import { ChangeEvent, useState } from "react";
import styled from "styled-components";
import CheckBox from "./CheckBox";
import { useNavigate } from "react-router-dom";

const Tos = () => {
  const [checkList, setCheckList] = useState<string[]>([]);
  const navigate = useNavigate();

  const checkAll = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.checked
      ? setCheckList(["age", "terms", "collect", "marketing"])
      : setCheckList([]);
  };

  const check = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.checked
      ? setCheckList([...checkList, e.target.id])
      : setCheckList(checkList?.filter((chocie) => chocie !== e.target.id));
  };

  const checkTosState = () => {
    if (
      checkList.includes("age") &&
      checkList.includes("terms") &&
      checkList.includes("collect")
    ) {
      navigate("/emailauth");
    } else {
      alert("필수 동의 항목을 체크해주세요!");
    }
  };

  return (
    <TosContainer>
      <TitleSection>
        <Text font={"title1"}>약관동의</Text>
        <Text font={"title5"}>레시퍼블 서비스의 이용약관에 동의해주세요.</Text>
      </TitleSection>
      <CheckTosSection>
        <CheckAllTos>
          <CheckBox
            id="all"
            onChange={checkAll}
            checked={checkList.length === 4 ? true : false}
            label="네, 모두 동의하겠습니다."
          />
        </CheckAllTos>
        <SeperateLine />
        <CheckTos>
          <CheckBox
            id="age"
            onChange={check}
            checked={checkList.includes("age") ? true : false}
            label="[필수] 만 14세 이상입니다."
          />
        </CheckTos>
        <CheckTos>
          <CheckBox
            id="terms"
            onChange={check}
            checked={checkList.includes("terms") ? true : false}
            label="[필수] 레시퍼블 서비스 이용약관 동의"
          />
        </CheckTos>
        <CheckTos>
          <CheckBox
            id="collect"
            onChange={check}
            checked={checkList.includes("collect") ? true : false}
            label="[필수] 개인정보 수집 및 이용 동의"
          />
        </CheckTos>
        <CheckTos>
          <CheckBox
            id="marketing"
            onChange={check}
            checked={checkList.includes("marketing") ? true : false}
            label="[선택] 마케팅 정보 수신에 대한 동의"
          />
        </CheckTos>
      </CheckTosSection>
      <TosInfoSection>
        <Text font={"body1"} color={theme.colors.grey3}>
          만 14세 이상 회원가입 가능합니다.
        </Text>
        <InfoText>
          해당 내용은 <span>이용약관 및 정책 </span>
          에서도 확인이 가능합니다.
        </InfoText>
      </TosInfoSection>
      <Button
        typeState={
          checkList.includes("age") &&
          checkList.includes("terms") &&
          checkList.includes("collect")
            ? "completeBtn"
            : "disabledBtn"
        }
        onClick={checkTosState}
      >
        <Text font={"button1"}>다음</Text>
      </Button>
    </TosContainer>
  );
};

const TosContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  margin: 5rem 0 3rem 0;
`;

const CheckAllTos = styled.div`
  display: flex;
  margin: 2rem 0;
`;

const CheckTos = styled.div`
  display: flex;
  margin: 2rem 0;
`;

const SeperateLine = styled.hr`
  width: 100%;
  border: 0.01rem solid ${theme.colors.grey2};
  margin: 1rem 0;
`;

const CheckTosSection = styled.div`
  margin-top: 3rem;
`;

const TosInfoSection = styled.div`
  margin-bottom: 8rem;
`;

const InfoText = styled.div`
  font-family: "Spoqa Han Sans Neo";
  font-weight: 400;
  font-size: 1.1rem;
  line-height: 3.4rem;
  color: ${theme.colors.grey3};
  span {
    color: ${theme.colors.blue};
    &:hover {
      cursor: pointer;
    }
  }
`;

export default Tos;
