import Text from "@/components/commonComponents/Text";
import MainLogo from "@/assets/images/Recipable_MainLogo.png";
import KakaoLogin from "@/assets/images/kakao_login_large_wide.png";
import styled from "styled-components";
import Button from "@/components/commonComponents/Button";

import { useNavigate } from "react-router-dom";

const Login = () => {
  const REST_API_KEY: string = import.meta.env.VITE_REST_API_KEY;
  const REDIRECT_URI: string = import.meta.env.VITE_REDIRECT_URI;
  const link: string = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;

  const navigate = useNavigate();

  const loginWithKakao = () => {
    // console.log("test");
    window.location.href = link;
  };

  const gotoEmailLogin = () => {
    navigate("/emaillogin");
  };

  return (
    <LoginContainer>
      <MainLogoImg src={MainLogo} alt="Recipable 만들어 먹는 재미!" />
      <TitleSection>
        <Text font={"body1"}>로그인하고 원하는 레시피를 추천 받아봐요</Text>
      </TitleSection>
      <KakaoLoginSection onClick={loginWithKakao}>
        <KakaoLoginImg src={KakaoLogin} alt="KaKao Login" />
      </KakaoLoginSection>
      <Button typeState={"defaultBtn"} onClick={gotoEmailLogin}>
        <Text font={"body1"}>이메일로 로그인하기</Text>
      </Button>
    </LoginContainer>
  );
};

const LoginContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TitleSection = styled.section`
  text-align: center;
  margin-top: 8rem;
`;

const KakaoLoginSection = styled.div`
  cursor: pointer;
`;

const MainLogoImg = styled.img`
  width: 25rem;
  margin-top: 15rem;
`;

const KakaoLoginImg = styled.img`
  width: 25rem;
  height: 4rem;
  margin-top: 5rem;
  margin-bottom: 2rem;
`;

export default Login;
