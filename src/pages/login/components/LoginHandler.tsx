import { kakakLoginState, loginState } from "@/recoil/atom";
import { useSetRecoilState } from "recoil";
import { KakaoSignUpApi, kakaoAuthCodeApi } from "@/utils/apis/kakaoLoginApi";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "@/assets/images/LoadingSpinner.gif";
import Text from "@/components/commonComponents/Text";
import styled from "styled-components";

const LoginHandler = () => {
  const setIsLogin = useSetRecoilState(loginState);
  const setKakaoLogin = useSetRecoilState(kakakLoginState);
  const AUTHORIZE_CODE: string = new URLSearchParams(
    window.location.search
  ).get("code")!;

  const navigate = useNavigate();

  useEffect(() => {
    const kakaoLogin = async () => {
      try {
        console.log(AUTHORIZE_CODE);
        const response = await kakaoAuthCodeApi(AUTHORIZE_CODE);
        console.log(response);

        if (typeof response.data === "string") {
          const accessToken = response.headers["authorization"].split(" ")[1];
          localStorage.setItem("accessToken", accessToken);
          setIsLogin(true);
          setKakaoLogin(true);
          navigate("/main");
          return;
        }

        /* 등록되지 않은 사용자라면 signUp 진행 */
        const signUp_response = await KakaoSignUpApi({
          name: response.data.data.name,
          email: response.data.data.email,
          imageUrl: response.data.data.profileImage,
        });
        console.log(signUp_response);
        const accessToken =
          signUp_response.headers["authorization"].split(" ")[1];

        localStorage.setItem("accessToken", accessToken);
        setIsLogin(true);
        setKakaoLogin(true);
        navigate("/main");
      } catch (err) {
        console.log(err);
      }
    };

    kakaoLogin();
  }, [AUTHORIZE_CODE, navigate, setIsLogin, setKakaoLogin]);

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
