import Text from "@/components/commonComponents/Text";
import Category from "./components/Category";
import styled from "styled-components";
import Input from "./components/Input";
import Button from "@/components/commonComponents/Button";
import { useEffect, useState } from "react";

interface AddIngredientType {
  category: string | null;
  ingredient: string | null;
}
const IngredientInput = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>("");
  const [inputIngredient, setInputIngredient] = useState<string | null>("");
  const [addIngredient, setAddIngredient] = useState<AddIngredientType>({
    category: "",
    ingredient: "",
  });

  const handleSaveIngredient = () => {
    if (
      selectedCategory?.trim().length === 0 ||
      inputIngredient?.trim().length === 0
    ) {
      alert("모든 항목을 다 기입해주세요!");
      return;
    }
    setAddIngredient({
      category: selectedCategory,
      ingredient: inputIngredient,
    });
    setSelectedCategory("");
    setInputIngredient("");
  };

  useEffect(() => {
    console.log(addIngredient);
  }, [addIngredient]);

  return (
    <InputContainer>
      <section>
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
      </section>
      <section></section>
    </InputContainer>
  );
};

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 8rem;
  padding: 1rem;
  position: relative;
`;
const ButtonSection = styled.section`
  position: absolute;
  bottom: 0;
  left: 14rem;
`;
export default IngredientInput;
