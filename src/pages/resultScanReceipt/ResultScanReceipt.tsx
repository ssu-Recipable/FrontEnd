import IngredientList from "@/components/commonComponents/IngredientList";
import Text from "@/components/commonComponents/Text";
import { useState } from "react";
import styled from "styled-components";
import Button from "@/components/commonComponents/Button";
import { useRecoilValue } from "recoil";
import { ingredientDataListState } from "@/recoil/atom";
import { AddIngredientType } from "@/types/ScanReceiptType";
import { AddRefrigeratorReceipt } from "@/utils/apis/RefrigeratorApi";
import { useNavigate } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { theme } from "@/styles/theme";

const ResultScanReceipt = () => {
  const ingredientDataList = useRecoilValue(ingredientDataListState);
  const [isSuccess, SetIsSuccess] = useState(false);
  const [timeoutId, setTimeoutId] = useState<number | null>(null);
  const navigate = useNavigate();

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

  const gotoRecipeRecommend = () => {
    window.clearTimeout(timeoutId!);
    navigate("/chooseIngredients");
  };

  const saveIngredient = async () => {
    const newArray = ingredientList.map(
      ({ ingredientCategory, ingredientName }) => ({
        ingredientCategory,
        ingredientName,
      })
    );

    const check = window.confirm("식재료를 등록하시겠습니까?");
    if (check) {
      try {
        const response = await AddRefrigeratorReceipt({
          ingredients: newArray,
        });
        console.log(response);
        SetIsSuccess(true);

        const id = window.setTimeout(() => {
          SetIsSuccess(false);
          navigate("/refrigerator");
        }, 4000);
        setTimeoutId(id);
      } catch (err) {
        console.log(err);
      }
    } else {
      return;
    }
  };

  return (
    <ResultScanContainer>
      {isSuccess ? (
        <SuccessMessage>
          <Check>
            <FaCheck size={100} color={theme.colors.main1} />
          </Check>
          <TextSection>
            <Text font={"title3"}>재료 저장 완료!</Text>
            <Text font={"body1"}>
              냉장고를 확인하시고 싶으면 잠시만 기다려주세요.
            </Text>
          </TextSection>
          <Button typeState={"completeBtn"} onClick={gotoRecipeRecommend}>
            <Text font={"button1"}>레시피 추천 받으러 가기</Text>
          </Button>
        </SuccessMessage>
      ) : (
        <>
          <TitleSection>
            <Text font={"title1"}>다음과 같은 재료를 냉장고에 추가합니다.</Text>
          </TitleSection>
          <ListContainer>
            <IngredientList
              isEdit={false}
              onRemove={handleRemoveIngredient}
              ingredientList={ingredientList}
            />
          </ListContainer>
          <ButtonSection>
            <Button typeState={"completeBtn"} onClick={saveIngredient}>
              <Text font={"button1"}>냉장고에 재료 추가하기</Text>
            </Button>
          </ButtonSection>
        </>
      )}
    </ResultScanContainer>
  );
};

const ResultScanContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
`;

const TitleSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ListContainer = styled.div`
  margin: 0 4rem;
  margin-top: 5rem;
`;

const ButtonSection = styled(TitleSection)`
  margin-top: 6rem;
  margin-bottom: 3rem;
`;

const SuccessMessage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;
`;

const Check = styled.div`
  margin-top: 5rem;
`;

const TextSection = styled.div`
  margin-top: 5rem;
  margin-bottom: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default ResultScanReceipt;
