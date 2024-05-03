import Text from "@/components/commonComponents/Text";
import { theme } from "@/styles/theme";
import { useState } from "react";
import styled from "styled-components";

const Category = () => {
  const [isDropDown, setIsDropDown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

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
          <Option value="a" key="a" onClick={onClickOption}>
            A
          </Option>
          <Option value="b" key="b" onClick={onClickOption}>
            B
          </Option>
          <Option value="c" key="c" onClick={onClickOption}>
            C
          </Option>
          <Option value="d" key="d" onClick={onClickOption}>
            D
          </Option>
          <Option value="e" key="e" onClick={onClickOption}>
            E
          </Option>
        </DropDownArea>
      )}
    </CategoryContainer>
  );
};

const CategoryContainer = styled.div`
  margin-top: 3.5rem;
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
  top: 23rem;
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
