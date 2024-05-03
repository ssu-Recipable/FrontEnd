import Text from "@/components/commonComponents/Text";
import Category from "./components/Category";
import styled from "styled-components";
import Input from "./components/Input";

const IngredientInput = () => {
  return (
    <InputContainer>
      <section>
        <Text font={"title1"}>재료를 입력해주세요</Text>
        <Category />
        <Input />
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
`;
export default IngredientInput;
