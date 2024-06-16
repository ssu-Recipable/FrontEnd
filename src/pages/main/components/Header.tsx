import { theme } from "@/styles/theme";
import { FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "@/assets/images/Recipable_Logo2.png"

const Header = () => {
  const navigate = useNavigate();

  const gotoMyPage = () => {
    navigate("/mypage");
  };
  return (
    <HeaderWrapper>
      {/*<Text font={"head2"} color={theme.colors.grey1}>
        {formattedDate}
      </Text>*/}
      <section style={{display: "flex", flexDirection: "column"}}>
      <div style={{width: "100%", borderBottom: "1px solid rgba(0,0,0,0.1)"}}>
      <Link to={"/main"}>
        <img src={Logo} style={{ height: "3.4rem", marginBottom: "1rem", marginTop: "1rem"}}/>
      </Link>
      <span onClick={gotoMyPage} style={{position: "absolute", top: "3%", right: "0"}}>
          <FaUserCircle size={28} color={theme.colors.grey2} />
      </span>
      </div>
      </section>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  padding: 0.8rem 0;
  section {
    display: flex;
    justify-content: space-between;
    span {
      cursor: pointer;
    }
  }
`;

export default Header;
