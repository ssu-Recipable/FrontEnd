import Text from "@/components/commonComponents/Text";
import MainLogo from "@/assets/images/MainLogo.jpeg";
import KakaoLogin from "@/assets/images/kakao_login_large_wide.png";
import styled from "styled-components";

const Login = () => {
  return (
    <LoginContainer>
      <MainLogoImg src={MainLogo} alt="Recipable 만들어 먹는 재미!" />
      <Text font={"title3"}>로그인하고 원하는 레시피를 추천 받아봐요</Text>
      <KakaoLoginImg src={KakaoLogin} alt="KaKao Login" />
    </LoginContainer>
  );
};

const LoginContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const MainLogoImg = styled.img`
  width: 25rem;
`;
const KakaoLoginImg = styled.img`
  width: 25rem;
`;
export default Login;
