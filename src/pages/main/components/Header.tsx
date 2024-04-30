import Text from "@/components/commonComponents/Text";
import { theme } from "@/styles/theme";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const navigate = useNavigate();
  const today = new Date();
  const formattedDate = `${today.getFullYear()}년 ${
    today.getMonth() + 1
  }월 ${today.getDate()}일`;

  const gotoMyPage = () => {
    navigate("/mypage");
  };
  return (
    <HeaderWrapper>
      <Text font={"head2"} color={theme.colors.grey1}>
        {formattedDate}
      </Text>
      <section>
        <Text font={"head1"}>오늘의 레시피</Text>
        <span onClick={gotoMyPage}>
          <FaUserCircle size={28} color={theme.colors.grey2} />
        </span>
      </section>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  margin-top: 2rem;
  padding: 1rem;
  border-bottom: 1px solid ${theme.colors.grey2};
  section {
    display: flex;
    justify-content: space-between;
    span {
      cursor: pointer;
    }
  }
`;

export default Header;
