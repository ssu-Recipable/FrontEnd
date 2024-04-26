import Button from "@/components/commonComponents/Button";
import styled from "styled-components";

const Test = () => {
  return (
    <div>
      <Head1>오늘의 레시피</Head1>
      <Head2>2024년 4월 25일</Head2>
      <Title1>김치찌개</Title1>
      <Title2>한식 </Title2>
      <Title3>최근 검색된 레시피</Title3>
      <Title4>간장계란밥</Title4>
      <Body1>프로필 수정 회원 탈퇴</Body1>
      <Body2>상세 설명</Body2>
      <Button1>재료 선택 완료</Button1>
      <Button2>확인</Button2>
      <div>
        <Main1 />
        <Main2 />
        <Grey1 />
        <Grey2 />
      </div>
      <Button typeState={"confirmBtn"}>재료 선택 완료</Button>
    </div>
  );
};
const Head1 = styled.div`
  font-family: "Pretendard Variable";
  font-weight: 700;
  font-size: 2.8rem;
  line-height: 3.4rem;
`;
const Head2 = styled.div`
  font-family: "Pretendard Variable";
  font-weight: 700;
  font-size: 2.2rem;
  line-height: 3rem;
`;

const Title1 = styled.div`
  font-family: "Pretendard Variable";
  font-weight: 700;
  font-size: 2.2rem;
  line-height: 3.4rem;
`;
const Title2 = styled.div`
  font-family: "Pretendard Variable";
  font-weight: 400;
  font-size: 2.2rem;
  line-height: 2.8rem;
`;
const Title3 = styled.div`
  font-family: "Pretendard Variable";
  font-weight: 700;
  font-size: 1.7rem;
  line-height: 2.8rem;
`;
const Title4 = styled.div`
  font-family: "Pretendard Variable";
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 2.4rem;
`;

const Body1 = styled.div`
  font-family: "Pretendard Variable";
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2.4rem;
`;
const Body2 = styled.div`
  font-family: "Pretendard Variable";
  font-weight: 400;
  font-size: 1.3rem;
  line-height: 2.4rem;
`;

const Button1 = styled.div`
  font-family: "Pretendard Variable";
  font-weight: 600;
  font-size: 1.7rem;
  line-height: 2rem;
`;
const Button2 = styled.div`
  font-family: "Pretendard Variable";
  font-weight: 600;
  font-size: 1.3rem;
  line-height: 2rem;
`;

const Main1 = styled.div`
  width: 5rem;
  height: 5rem;
  background-color: #7af3ca;
`;
const Main2 = styled.div`
  width: 5rem;
  height: 5rem;
  background-color: #78e99b;
`;
const Grey1 = styled.div`
  width: 5rem;
  height: 5rem;
  background-color: #c0c0c0;
`;
const Grey2 = styled.div`
  width: 5rem;
  height: 5rem;
  background-color: #e0e0e0;
`;
export default Test;
