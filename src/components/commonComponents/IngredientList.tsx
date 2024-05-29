import Text from "@/components/commonComponents/Text";
import styled from "styled-components";
import { theme } from "@/styles/theme";
import { FaPencil } from "react-icons/fa6";
import { IngredientListType } from "@/types/ScanReceiptType";

const IngredientList = ({
  isEdit,
  ingredientList,
  onRemove,
}: IngredientListType) => {
  return (
    <>
      {ingredientList &&
        ingredientList.map((item) => (
          <IngredientItem key={item.id}>
            <div>
              <Text font={"title4"} color={theme.colors.main3}>
                {item.ingredientCategory}
              </Text>
            </div>
            <Text font={"body1"}>{item.ingredientName}</Text>
            {isEdit ? (
              <EditButton>
                <FaPencil size={16} color={theme.colors.black} />
              </EditButton>
            ) : null}
            <DeleteButton type="button" onClick={() => onRemove(item.id as number)} />
          </IngredientItem>
        ))}
    </>
  );
};

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
const EditButton = styled.div`
  cursor: pointer;
  position: absolute;
  top: 1.4rem;
  right: 0;
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
