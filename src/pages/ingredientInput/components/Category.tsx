import Text from "@/components/commonComponents/Text";
import { theme } from "@/styles/theme";
import { CategoryType } from "@/types/ScanReceiptType";
import { useState } from "react";
import styled from "styled-components";
import { CategoryList} from "@/components/commonComponents/CategoryList"

const   Category = ({ selectedCategory, setSelectedCategory }: CategoryType) => {
  const [isDropDown, setIsDropDown] = useState(false);
  const onClickOption = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSelectedCategory(e.currentTarget.innerText);
    setIsDropDown(false);
  };
  const onClickSelect = () => {
    setIsDropDown(!isDropDown);
  };
  return (
    <CategoryContainer>
      <Text font={"title3"}>카테고리</Text>
      <SelectButton type="button" onClick={onClickSelect}>
        <Select $isCategorySelected={selectedCategory !== ""}>
          {selectedCategory === ""
            ? "카테고리를 선택해주세요"
            : selectedCategory}
        </Select>
        <DownArrow />
      </SelectButton>
      {isDropDown && (
        <DropDownArea>
          {CategoryList.map((item, id) => (
            <Option value={item} key={id} onClick={onClickOption}>
              {item}
            </Option>
          ))}
        </DropDownArea>
      )}
    </CategoryContainer>
  );
};

const CategoryContainer = styled.div`
  margin-top: 3.5rem;
  width: 100%;
  padding: 0 1rem;
`;
const SelectButton = styled.button`
  position: relative;
  width: 100%;
  height: 3rem;
  margin-top: 1rem;
  border-radius: 1rem;
  border: 1px solid ${theme.colors.grey2};
  background-color: ${theme.colors.white};
`;
const DownArrow = styled.span`
  width: 1rem;
  height: 1rem;
  border-top: 1px solid ${theme.colors.black};
  border-right: 1px solid ${theme.colors.black};
  display: inline-block;
  transform: rotate(135deg);
  position: absolute;
  top: 0.5rem;
  right: 1rem;
`;
const Select = styled.div<{ $isCategorySelected: boolean }>``;
const DropDownArea = styled.div`
  position: absolute;
  width: 31.5rem;
  background-color: ${theme.colors.grey1};
  border-radius: 0.6rem;
  top: 19.8rem;
  height: 12rem;
  overflow-y: auto;
  @keyframes dropdown {
    0% {
      transform: translateY(-5%);
    }
    100% {
      transform: translateY(0);
    }
  }
  animation: dropdown 0.4s ease;
  z-index: 9999;
`;
const Option = styled.button`
  width: 100%;
  height: 4rem;
  &:hover {
    border-radius: 0.6rem;
    background-color: rgba(255, 255, 255, 0.1);
    cursor: pointer;
  }
`;
export default Category;
