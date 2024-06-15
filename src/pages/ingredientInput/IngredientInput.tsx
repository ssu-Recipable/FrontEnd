import Text from "@/components/commonComponents/Text";
import Category from "./components/Category";
import styled from "styled-components";
import Input from "./components/Input";
import Button from "@/components/commonComponents/Button";
import { useEffect, useState } from "react";
import { theme } from "@/styles/theme";
import IngredientList from "../../components/commonComponents/IngredientList";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { AddIngredientType } from "@/types/ScanReceiptType";
import { AddRefrigeratorDirect } from "@/utils/apis/RefrigeratorApi";
import { FaCheck } from "react-icons/fa";

const IngredientInput = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [inputIngredient, setInputIngredient] = useState<string>("");
  const [ingredientList, setIngredientList] = useState<AddIngredientType[]>([]);
  const [isSuccess, SetIsSuccess] = useState(false);
  const [timeoutId, setTimeoutId] = useState<number | null>(null);

  const navigate = useNavigate();

  const movePreviousPage = () => {
    navigate(-1);
  };

  const handleSaveIngredient = () => {
    if (
      selectedCategory?.trim().length === 0 ||
      inputIngredient?.trim().length === 0
    ) {
      alert("모든 항목을 다 기입해주세요!");
      return;
    }
    const newIngredient = {
      id: Math.random(),
      ingredientCategory: selectedCategory,
      ingredientName: inputIngredient,
    };
    setIngredientList((prevState) => {
      const updateList = [newIngredient, ...prevState];
      return updateList;
    });
    setSelectedCategory("");
    setInputIngredient("");
  };

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
        const response = await AddRefrigeratorDirect({
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

  useEffect(() => {
    console.log(ingredientList);
  }, [ingredientList]);

  return (
    <InputContainer>
      {isSuccess ? (
        <SuccessMessage>
          <Check>
            <FaCheck size={100} color={theme.colors.main1} />
          </Check>
          <TextSection>
            <Text font={"title3"}>재료 저장 완료!</Text>
            <Text font={"body1"}>
              냉장고를 확인하시고 싶으면 잠시만 기다려주세요
            </Text>
          </TextSection>
          <Button typeState={"completeBtn"} onClick={gotoRecipeRecommend}>
            <Text font={"button1"}>레시피 추천 받으러 가기!</Text>
          </Button>
        </SuccessMessage>
      ) : (
        <>
          <MoveBack onClick={movePreviousPage}>
                <IoIosArrowBack size={20} />
          </MoveBack>
          <TopContainer>
            <TitleSection>
              <Text font={"title1"}>재료를 입력해주세요</Text>
            </TitleSection>
            <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%", marginBottom: "4rem"}}>
            <Category
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
            <Input
              inputIngredient={inputIngredient}
              setInputIngredient={setInputIngredient}
            />
            <TopButtonSection>
              <Button typeState={"confirmBtn"} onClick={handleSaveIngredient}>
                <Text font={"button2"}>확인</Text>
              </Button>
            </TopButtonSection>
            </div>
          </TopContainer>
          {ingredientList.length !== 0 ? 
          <BottomContainer>
            <Text font={"title3"}>다음과 같은 재료를 냉장고에 추가합니다</Text>
            <ItemContainer>
              <IngredientList
                isEdit={false}
                onRemove={handleRemoveIngredient}
                ingredientList={ingredientList}
              />
            </ItemContainer>
            <BottomButtonSection>
              <Button
                typeState={
                  ingredientList.length > 0 ? "completeBtn" : "disabledBtn"
                }
                onClick={saveIngredient}
              >
                <Text font={"button1"}>냉장고에 재료 추가하기</Text>
              </Button>
            </BottomButtonSection>
          </BottomContainer> : null}
        </>
      )}
    </InputContainer>
  );
};

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const TitleSection = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const MoveBack = styled.span`
  cursor: pointer;
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 3rem;
`;

const TopContainer = styled.section`
  width: 100%;
  height: auto;
  min-height: 100%;
`;

const TopButtonSection = styled.section`
`;

const BottomContainer = styled.section`
  position : relative;
  bottom: 0;
  padding-top: 2rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const ItemContainer = styled.div`
  width: 100%;
  padding: 0 1rem;
  overflow-y: auto;
  margin-bottom: 3rem;
  height: 15rem;
`;

const BottomButtonSection = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
`;
/**
const DefalutMessage = styled.div`
  display: flex;
  height: 20rem;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;
`;
*/
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

export default IngredientInput;
