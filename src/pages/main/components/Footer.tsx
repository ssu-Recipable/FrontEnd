import Text from "@/components/commonComponents/Text";
import { IoMenu } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";
import { theme } from "@/styles/theme";
import TestLogo2 from "@/assets/images/Recipable_Logo1.png";

const Footer = () => {
  return (
    <FooterWrapper>
      <div>
        <IoMenu size={25} />
        <Text font={"title4"}>냉장고</Text>
      </div>
      <LogoBox>
        <img src={TestLogo2} alt="Logo" />
      </LogoBox>
      <div>
        <FaStar size={20} />
        <Text font={"title4"}>북마크</Text>
      </div>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3rem;
  padding: 1rem 3rem;
  border-top: 1px solid ${theme.colors.grey2};
`;
const LogoBox = styled.div`
  position: absolute;
  top: -2.2rem;
  left: 12.7rem;
  border-radius: 70rem;
  overflow: hidden;
  img {
    width: 9rem;
    height: 9rem;
    object-fit: cover;
  }
`;

export default Footer;
