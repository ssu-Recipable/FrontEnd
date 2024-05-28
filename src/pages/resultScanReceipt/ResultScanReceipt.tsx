import IngredientList from "@/components/commonComponents/IngredientList";
import Text from "@/components/commonComponents/Text";
import { useState } from "react";
import styled from "styled-components";
import Button from "@/components/commonComponents/Button";
import { useRecoilValue } from "recoil";
import { ingredientDataListState } from "@/recoil/atom";
import { AddIngredientType } from "@/types/ScanReceiptType";

const ResultScanReceipt = () => {
  const ingredientDataList = useRecoilValue(ingredientDataListState);
  const ingredientListWithId = ingredientDataList.map((ingredient) => ({
    ...ingredient,
    id: Math.random(),
  }));

  const [ingredientList, setIngredientList] =
    useState<AddIngredientType[]>(ingredientListWithId);

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
