import Text from "@/components/commonComponents/Text";
import { theme } from "@/styles/theme";
import { useRef } from "react";
import styled from "styled-components";
import { InputType } from "../types/type";

const Input = ({ inputIngredient, setInputIngredient }: InputType) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const deleteInput = () => {
    inputRef.current!.value = "";
  };
  const handleInputValue = () => {
    setInputIngredient(inputRef.current!.value);
  };
  return (
    <InputContainer>
      <Text font={"title3"}>재료명</Text>
      <InputBox>
        <InputContent
          type="text"
          ref={inputRef}
          onChange={handleInputValue}
          value={inputIngredient ? inputIngredient : ""}
        />
        <DeleteButton type="button" onClick={deleteInput} />
      </InputBox>
    </InputContainer>
  );
};

const InputContainer = styled.div`
  margin-top: 2rem;
  margin-bottom: 10rem;
`;
const InputBox = styled.div`
  position: relative;
`;
const InputContent = styled.input`
  width: 100%;
  height: 3rem;
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 1rem;
  border: 1px solid ${theme.colors.grey2};
  background-color: ${theme.colors.white};
  outline: none;
  font-size: ${theme.fonts.body1};
`;
const DeleteButton = styled.button`
  position: absolute;
  padding: 1rem;
  background-color: transparent;
  top: 1.8rem;
  right: 0.5rem;
  width: 1.5rem;
  height: 1.5rem;

  &:before,
  &:after {
    content: "";
    width: 1.5rem;
    height: 0.1rem;
    position: absolute;
    top: 0.8rem;
    right: -0.5rem;
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

export default Input;
