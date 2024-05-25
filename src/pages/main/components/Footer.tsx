import Text from "@/components/commonComponents/Text";
import { IoMenu } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";
import { theme } from "@/styles/theme";
import TestLogo2 from "@/assets/images/Recipable_Logo1.png";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const gotoRefrigerator = () => {
    navigate("/refrigerator");
  };

  const gotoBookMark = () => {
    navigate("/bookmark");
  };

  const chooseIngredients = () => {
    navigate("/chooseIngredients");
  };

  return (
    <FooterWrapper>
      <SubMenuBox onClick={gotoRefrigerator}>
        <IoMenu size={25} />
        <Text font={"title4"}>냉장고</Text>
      </SubMenuBox>
      <LogoBox onClick={chooseIngredients}>
        <img src={TestLogo2} alt="Logo" />
      </LogoBox>
      <SubMenuBox onClick={gotoBookMark}>
        <FaStar size={20} />
        <Text font={"title4"}>북마크</Text>
      </SubMenuBox>
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

const SubMenuBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const LogoBox = styled.div`
  cursor: pointer;
  position: absolute;
  top: -2.2rem;
  left: 12.7rem;
  border-radius: 70rem;
  overflow: hidden;

  img {
    width: 9rem;
    height: 9rem;
    object-fit: cover;
    transition: transform 0.5s ease;
    &:hover {
      transform: rotate(45deg) scale(1.05);
    }
  }
`;

export default Footer;
