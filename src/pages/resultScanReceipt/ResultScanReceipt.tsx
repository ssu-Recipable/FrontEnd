import IngredientList from "@/components/commonComponents/IngredientList";
import Text from "@/components/commonComponents/Text";
import { AddIngredientType } from "../ingredientInput/types/type";
import { useState } from "react";
import styled from "styled-components";
import Button from "@/components/commonComponents/Button";

const TEST_LIST = [
  { id: Math.random(), category: "고기류", ingredient: "삼겹살" },
  { id: Math.random(), category: "해산물", ingredient: "연어" },
  { id: Math.random(), category: "채소", ingredient: "당근" },
  { id: Math.random(), category: "과일", ingredient: "사과" },
  { id: Math.random(), category: "곡물", ingredient: "쌀" },
  { id: Math.random(), category: "유제품", ingredient: "우유" },
  { id: Math.random(), category: "간식", ingredient: "과자" },
  { id: Math.random(), category: "음료", ingredient: "차" },
  { id: Math.random(), category: "고기류", ingredient: "삼겹살" },
  { id: Math.random(), category: "해산물", ingredient: "연어" },
  { id: Math.random(), category: "채소", ingredient: "당근" },
  { id: Math.random(), category: "과일", ingredient: "사과" },
  { id: Math.random(), category: "곡물", ingredient: "쌀" },
  { id: Math.random(), category: "유제품", ingredient: "우유" },
  { id: Math.random(), category: "간식", ingredient: "과자" },
  { id: Math.random(), category: "음료", ingredient: "차" },
  { id: Math.random(), category: "고기류", ingredient: "삼겹살" },
  { id: Math.random(), category: "해산물", ingredient: "연어" },
  { id: Math.random(), category: "채소", ingredient: "당근" },
  { id: Math.random(), category: "과일", ingredient: "사과" },
];

const ResultScanReceipt = () => {
  const [ingredientList, setIngredientList] =
    useState<AddIngredientType[]>(TEST_LIST);
  const handleRemoveIngredient = (id: number) => {
    setIngredientList((prevState) => {
      return prevState.filter((ingreList) => ingreList.id !== id);
    });
  };
  return (
    <ResultScanContainer>
      <TitleSection>
        <Text font={"title1"}>다음과 같은 재료를 냉장고에 추가합니다.</Text>
      </TitleSection>
      <ListContainer>
        <IngredientList
          isEdit={true}
          onRemove={handleRemoveIngredient}
          ingredientList={ingredientList}
        />
      </ListContainer>
      <ButtonSection>
        <Button typeState={"completeBtn"}>
          <Text font={"button1"}>냉장고에 재료 추가하기</Text>
        </Button>
      </ButtonSection>
    </ResultScanContainer>
  );
};

const ResultScanContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 12rem;
`;

const TitleSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ListContainer = styled.div`
  margin-top: 3rem;
  height: 30rem;
  overflow-y: auto;
`;

const ButtonSection = styled(TitleSection)`
  margin-top: 5rem;
`;
export default ResultScanReceipt;
