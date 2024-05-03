import Text from "@/components/commonComponents/Text";
import Category from "./components/Category";
import styled from "styled-components";
import Input from "./components/Input";
import Button from "@/components/commonComponents/Button";
import { useEffect, useState } from "react";
import { theme } from "@/styles/theme";
import { AddIngredientType } from "./types/type";

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
        <ButtonSection>
          <Button typeState={"confirmBtn"} onClick={handleSaveIngredient}>
            <Text font={"button2"}>확인</Text>
          </Button>
        </ButtonSection>
      </TopContainer>
      <BottomContainer>
        <Text font={"title3"}>다음과 같은 재료를 냉장고에 추가합니다</Text>
        <div>
          {ingredientList &&
            ingredientList.map((item) => (
              <IngredientItem>
                <Text font={"title4"}>{item.category}</Text>
                <Text font={"body1"}>{item.ingredient}</Text>
              </IngredientItem>
            ))}
        </div>
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
const ButtonSection = styled.section`
  position: absolute;
  bottom: 3rem;
  left: 13rem;
`;
const TopContainer = styled.section`
  position: relative;
  border-bottom: 1px solid ${theme.colors.grey2};
`;
const BottomContainer = styled.section`
  margin-top: 4rem;
`;
const IngredientItem = styled.div`
  display: flex;
`;
export default IngredientInput;
