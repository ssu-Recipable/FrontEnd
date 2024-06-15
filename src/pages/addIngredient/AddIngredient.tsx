import Button from "@/components/commonComponents/Button";
import Text from "@/components/commonComponents/Text";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import styled from "styled-components";

const AddIngredient = () => {
  const navigate = useNavigate();
  const gotoScanReceipt = () => {
    navigate("/scanreceipt");
  };
  const gotoIngredientInput = () => {
    navigate("/ingredientinput");
  };

  const movePreviousPage = () => {
    navigate(-1);
  };

  return (
    <AddIngredientContainer>
      <MoveBack onClick={movePreviousPage}>
          <IoIosArrowBack size={20} />
      </MoveBack>
      <Title>
        <Text font={"title1"}>재료 추가 방식을 선택해주세요</Text>
      </Title>
      <ActionState>
        <Button typeState={"completeBtn"} onClick={gotoScanReceipt}>
          <Text font={"button1"}>영수증 스캔하기</Text>
        </Button>
        <Button typeState={"disproveBtn"} onClick={gotoIngredientInput}>
          <Text font={"button1"}>직접 입력하기</Text>
        </Button>
      </ActionState>
    </AddIngredientContainer>
  );
};

const AddIngredientContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 5rem;
`;

const MoveBack = styled.div`
  cursor: pointer;
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 20rem;
`;

const ActionState = styled.div`
  height: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default AddIngredient;
