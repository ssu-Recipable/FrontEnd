import Text from "@/components/commonComponents/Text";
import styled from "styled-components";
import { theme } from "@/styles/theme";
import { IngredientListType } from "../types/type";

const IngredientList = ({ ingredientList, onRemove }: IngredientListType) => {
  return (
    <ItemContainer>
      {ingredientList && ingredientList.length > 0 ? (
        ingredientList.map((item) => (
          <IngredientItem key={item.id}>
            <div>
              <Text font={"title4"} color={theme.colors.main3}>
                {item.category}
              </Text>
            </div>
            <Text font={"body1"}>{item.ingredient}</Text>
            <DeleteButton type="button" onClick={() => onRemove(item.id)} />
          </IngredientItem>
        ))
      ) : (
        <DefalutMessage>
          <Text font={"title4"}>
            이곳에 원하는 식재료의 이름과 카테고리를 추가해보세요!
          </Text>
        </DefalutMessage>
      )}
    </ItemContainer>
  );
};

const ItemContainer = styled.div`
  width: 100%;
  height: 20rem;
  overflow-y: auto;
  margin-bottom: 5rem;
`;
const DefalutMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8rem;
`;
const IngredientItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 5rem;
  border-bottom: 1px solid ${theme.colors.grey2};
  div {
    width: 5rem;
  }
`;
const DeleteButton = styled.button`
  position: absolute;
  top: 1.3rem;
  right: 0;
  padding: 1rem;
  background-color: transparent;

  &:before,
  &:after {
    content: "";
    width: 1.5rem;
    height: 0.1rem;
    position: absolute;
    border-radius: 4px;
    background-color: ${theme.colors.black};
  }
  &:before {
    transform: translate(-50%, -50%) rotate(-45deg);
  }

  &:after {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &:hover::before {
    background-color: ${theme.colors.red};
  }
  &:hover::after {
    background-color: ${theme.colors.red};
  }
`;
export default IngredientList;
