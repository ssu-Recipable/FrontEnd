import { styled } from "styled-components";
import Text from "@/components/commonComponents/Text";
import RefrigeratorHeader from "@/components/refrigerator/RefrigeratorHeader";
import { useEffect, useState } from "react";
import Button from "@/components/commonComponents/Button";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { RefrigeratorApi } from "@/utils/apis/RefrigeratorApi";
import DefaultIngredientImg from "@/assets/images/default_ingredients.png";
import { useRecoilState } from "recoil";
import { ingredientsState } from "@/recoil/atom";

const ChooseIngredients = () => {
  const { data } = useQuery({
    queryKey: ["refrigerator"],
    queryFn: () => RefrigeratorApi(),
  });

  const navigate = useNavigate();

  const [allIngredients, setAllIngredients] = useState<string[]>([]);
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [allSelected, setAllSelected] = useState(false);

  const [ingredients, setIngredients] = useRecoilState(ingredientsState);

  const handleIngredientClick = (ingredient: string) => {
    const isAlreadySelected = selectedIngredients.includes(ingredient);

    if (isAlreadySelected) {
      setSelectedIngredients((prevState) =>
        prevState.filter((item) => item != ingredient)
      );
    } else {
      setSelectedIngredients((prevState) => [...prevState, ingredient]);
    }
  };

  const handleSelectAllClick = () => {
    if (allSelected) {
      setSelectedIngredients([]);
    } else {
      setSelectedIngredients(allIngredients);
    }
    setAllSelected((prevState) => !prevState);
  };

  const handleCompleteClick = () => {
    if (selectedIngredients.length === 0) {
      alert("재료를 하나 이상 선택해주세요.");
    } else {
      setIngredients(selectedIngredients);
      sessionStorage.removeItem("filtering");
      sessionStorage.removeItem("recipes");
      navigate("/filtering");
    }
  };

  useEffect(() => {
    if (data) {
      const ingredients = data.flatMap(
        (category) =>
          category.refrigeratorDetailList?.map(
            (detail) => detail.ingredientName
          ) || []
      );
      setAllIngredients(ingredients);
    }
  }, [data]);

  useEffect(() => {
    if (ingredients.length === 0) {
      sessionStorage.removeItem("filtering");
      sessionStorage.removeItem("recipes");
    }
  }, []);

  console.log(selectedIngredients);

  return (
    <>
      <RefrigeratorHeader />
      <Wrapper>
        <CategorySection>
          <>
            {data? data.map((category, index) => (
              <>
                {category.refrigeratorDetailList?.length !== 0 ? (
                  <>
                    <Category>
                      <Text font={"title3"}>{category.categoryName}</Text>
                      <Text font={"body2"} color={"gray"}>
                        {category.detailContent}
                      </Text>
                      <IngredientList>
                        {category.refrigeratorDetailList?.map((ingredient) => (
                          <Ingredient
                            onClick={() =>
                              handleIngredientClick(ingredient.ingredientName)
                            }
                          >
                            {ingredient.ingredientImage ? (
                              <IngredientImg
                                src={ingredient.ingredientImage}
                                isSelected={selectedIngredients.includes(
                                  ingredient.ingredientName
                                )}
                              />
                            ) : (
                              <DefaultImg
                                src={DefaultIngredientImg}
                                isSelected={selectedIngredients.includes(
                                  ingredient.ingredientName
                                )}
                              />
                            )}
                            <Text font={"body1"}>
                              {ingredient.ingredientName}
                            </Text>
                            <Text font={"body2"} color={"gray"}>
                              {ingredient.expiredRemaining
                                ? `D-${ingredient.expiredRemaining}`
                                : null}
                            </Text>
                          </Ingredient>
                        ))}
                      </IngredientList>
                    </Category>
                    {index !== data.length - 1 && (
                      <div
                        style={{
                          borderBottom: "1px solid #d8d8d8",
                          width: "100%",
                        }}
                      />
                    )}
                  </>
                ) : null}
              </>
            ))
          :<div style={{height: "50rem", display: "flex", alignItems: "center", justifyContent: "center"}}>
          <Text font={"body1"}>저장된 재료가 없습니다.</Text>
      </div>}
          </>
        </CategorySection>
        <SelectAll>
          <svg
            onClick={handleSelectAllClick}
            style={{ cursor: "pointer" }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={allSelected ? "#78e99b" : "#e6e6e6"}
            width="20"
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
              clipRule="evenodd"
            />
          </svg>
          <Text font={"body2"}>전체 선택하기</Text>
        </SelectAll>
        <div style={{ marginBottom: "3rem" }}>
          <Button typeState={"completeBtn"} onClick={handleCompleteClick}>
            <Text font={"button2"}>재료 선택 완료</Text>
          </Button>
        </div>
      </Wrapper>
    </>
  );
};
export default ChooseIngredients;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const CategorySection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 1rem;
  margin-bottom: 5rem;
`;

const Category = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1.5rem 0;
  margin-bottom: 5rem;
`;

const IngredientList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 1rem;
  row-gap: 1rem;
  margin-top: 2rem;
`;

const Ingredient = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

interface IngredientProps {
  isSelected: boolean;
}

const IngredientImg = styled.img<IngredientProps>`
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 3rem;
  border: 0.1rem solid rgba(0, 0, 0, 0.1);
  opacity: ${({ isSelected }) => (isSelected ? "1" : "0.3")};
  transition: opacity 0.3s ease;
  &:hover {
    opacity: 1;
  }
  object-fit: cover;
`;

const DefaultImg = styled.img<IngredientProps>`
  width: 4.5rem;
  height: 4.5rem;
  opacity: ${({ isSelected }) => (isSelected ? "1" : "0.3")};
  transition: opacity 0.3s ease;
  &:hover {
    opacity: 1;
  }
`;

const SelectAll = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`;
