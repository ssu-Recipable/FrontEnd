import { useEffect } from "react";

const LoginHandler = () => {
  const AUTHORIZE_CODE: string | null = new URLSearchParams(
    window.location.search
  ).get("code");

  useEffect(() => {
    console.log(AUTHORIZE_CODE);
  }, [AUTHORIZE_CODE]);

  return <div>로그인중입니다.</div>;
};

export default LoginHandler;
