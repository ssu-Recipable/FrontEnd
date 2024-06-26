import Button from "@/components/commonComponents/Button";
import Text from "@/components/commonComponents/Text";

const Test = () => {
  return (
    <div>
      <Button typeState={"completeBtn"}>
        <Text font={"button1"}>재료 수정하기</Text>
      </Button>

      <Button typeState={"disproveBtn"}>
        <Text font={"button1"}>재료 삭제하기</Text>
      </Button>

      <Button typeState={"confirmBtn"}>
        <Text font={"button2"}>확인</Text>
      </Button>
    </div>
  );
};
export default Test;
