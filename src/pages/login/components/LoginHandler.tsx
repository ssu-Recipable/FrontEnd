import { loginState } from "@/recoil/atom";
import { useSetRecoilState } from "recoil";
import { KakaoSignUpApi, kakaoAuthCodeApi } from "@/utils/apis/kakaoLoginApi";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "@/assets/images/LoadingSpinner.gif";
import Text from "@/components/commonComponents/Text";
import styled from "styled-components";

const LoginHandler = () => {
  const setIsLogin = useSetRecoilState(loginState);
  const AUTHORIZE_CODE: string = new URLSearchParams(
    window.location.search
  ).get("code")!;

  const navigate = useNavigate();

  useEffect(() => {
    const kakaoLogin = async () => {
      try {
        const response = await kakaoAuthCodeApi(AUTHORIZE_CODE);
        console.log(response);
        /* 등록되지 않은 사용자라면 회원 등록 진행 */
        if (typeof response.data !== "string") {
          console.log("test");
          const signUp = await KakaoSignUpApi(response.data);
          console.log(signUp);
        }
        const accessToken = response.headers["authorization"].split(" ")[1];
        localStorage.setItem("accessToken", accessToken);
        setIsLogin(true);
        navigate("/main");
      } catch (err) {
        console.log(err);
      }
    };

    kakaoLogin();
  }, [AUTHORIZE_CODE, navigate, setIsLogin]);

  return (
    <LoadContainer>
      <Text font={"title1"}>로그인중입니다. 잠시만 기다려주세요.</Text>
      <img src={Spinner} alt="로딩중" width="100%" />
    </LoadContainer>
  );
};

const LoadContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20rem;
`;

export default LoginHandler;
