import IngredientList from "@/components/commonComponents/IngredientList";
import Text from "@/components/commonComponents/Text";
import { AddIngredientType } from "../ingredientInput/types/type";
import { useState } from "react";

const TEST_LIST = [
  { id: Math.random(), category: "고기류", ingredient: "삼겹살" },
  { id: Math.random(), category: "고기류", ingredient: "삼겹살" },
  { id: Math.random(), category: "고기류", ingredient: "삼겹살" },
  { id: Math.random(), category: "고기류", ingredient: "삼겹살" },
  { id: Math.random(), category: "고기류", ingredient: "삼겹살" },
  { id: Math.random(), category: "고기류", ingredient: "삼겹살" },
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
    <div>
      <Text font={"title1"}>다음과 같은 재료를 냉장고에 추가합니다.</Text>
      <IngredientList
        isEdit={true}
        onRemove={handleRemoveIngredient}
        ingredientList={ingredientList}
      />
    </div>
  );
};

export default ResultScanReceipt;
