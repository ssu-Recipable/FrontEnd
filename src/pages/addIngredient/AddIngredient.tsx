import Button from "@/components/commonComponents/Button";
import Text from "@/components/commonComponents/Text";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const AddIngredient = () => {
  const navigate = useNavigate();
  const gotoScanReceipt = () => {
    navigate("/scanreceipt");
  };
  return (
    <AddIngredientContainer>
      <Title>
        <Text font={"title1"}>재료 추가 방식을 선택해주세요</Text>
      </Title>
      <ActionState>
        <Button typeState={"completeBtn"} onClick={gotoScanReceipt}>
          <Text font={"button1"}>영수증 스캔하기</Text>
        </Button>
        <Button typeState={"disproveBtn"}>
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
  margin-top: 20rem;
`;
const Title = styled.div`
  margin-bottom: 7rem;
`;
const ActionState = styled.div`
  height: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default AddIngredient;
