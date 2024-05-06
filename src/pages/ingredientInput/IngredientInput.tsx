import Text from "@/components/commonComponents/Text";
import Category from "./components/Category";
import styled from "styled-components";
import Input from "./components/Input";
import Button from "@/components/commonComponents/Button";
import { useEffect, useState } from "react";
import { theme } from "@/styles/theme";
import { AddIngredientType } from "./types/type";
import IngredientList from "../../components/commonComponents/IngredientList";

const IngredientInput = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [inputIngredient, setInputIngredient] = useState<string>("");
  const [ingredientList, setIngredientList] = useState<AddIngredientType[]>([]);

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
      category: selectedCategory,
      ingredient: inputIngredient,
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

  useEffect(() => {
    console.log(ingredientList);
  }, [ingredientList]);

  return (
    <InputContainer>
      <TopContainer>
        <Text font={"title1"}>재료를 입력해주세요</Text>
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
      </TopContainer>
      <BottomContainer>
        <Text font={"title3"}>다음과 같은 재료를 냉장고에 추가합니다</Text>
        {ingredientList.length > 0 ? (
          <IngredientList
            isEdit={false}
            onRemove={handleRemoveIngredient}
            ingredientList={ingredientList}
          />
        ) : (
          <DefalutMessage>
            <Text font={"title4"}>
              이곳에 원하는 식재료의 이름과 카테고리를 추가해보세요!
            </Text>
          </DefalutMessage>
        )}
        <BottomButtonSection>
          <Button
            typeState={
              ingredientList.length > 0 ? "completeBtn" : "disabledBtn"
            }
          >
            <Text font={"button1"}>냉장고에 재료 추가하기</Text>
          </Button>
        </BottomButtonSection>
      </BottomContainer>
    </InputContainer>
  );
};

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 8rem;
  padding: 1rem;
`;

const TopContainer = styled.section`
  position: relative;
  border-bottom: 1px solid ${theme.colors.grey2};
`;

const TopButtonSection = styled.section`
  position: absolute;
  bottom: 3rem;
  left: 13.4rem;
`;

const BottomContainer = styled.section`
  position: relative;
  margin-top: 4rem;
`;

const BottomButtonSection = styled.section`
  position: absolute;
  bottom: -2rem;
  left: 3.25rem;
`;

const DefalutMessage = styled.div`
  display: flex;
  height: 20rem;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;
`;

export default IngredientInput;
