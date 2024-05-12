import { loginState } from "@/recoil/atom";
import { useSetRecoilState } from "recoil";
import { KakaoSignUpApi, kakaoAuthCodeApi } from "@/utils/apis/kakaoLoginApi";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
  }, [AUTHORIZE_CODE]);

  return <div>로그인중입니다.</div>;
};

export default LoginHandler;
