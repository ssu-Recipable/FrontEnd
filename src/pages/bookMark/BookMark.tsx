import Text from "@/components/commonComponents/Text";
import styled from "styled-components";

const BookMark = () => {
  return (
    <BookMarkContainer>
      <Text font={"title1"}>북마크한 레시피</Text>
    </BookMarkContainer>
  );
};

const BookMarkContainer = styled.div`
  margin-top: 5rem;
`;
export default BookMark;
