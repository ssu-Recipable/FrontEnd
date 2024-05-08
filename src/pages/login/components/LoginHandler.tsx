import { kakaoAuthCodeApi } from "@/utils/apis/kakaoLoginApi";
import { useEffect } from "react";

const LoginHandler = () => {
  const AUTHORIZE_CODE: string | null = new URLSearchParams(
    window.location.search
  ).get("code");

  const kakaoLogin = async () => {
    try {
      const { data } = await kakaoAuthCodeApi(AUTHORIZE_CODE);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    kakaoLogin();
  }, []);

  useEffect(() => {
    console.log(AUTHORIZE_CODE);
  }, [AUTHORIZE_CODE]);

  return <div>로그인중입니다.</div>;
};

export default LoginHandler;
