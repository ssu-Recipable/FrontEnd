import { useSetRecoilState } from "recoil";
import { loginState } from "@/recoil/atom";
import styled from "styled-components";
import Text from "@/components/commonComponents/Text";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { theme } from "@/styles/theme";
import { LoginUserPropType } from "@/types/EmailLoginType";
import { LoginApi } from "@/utils/apis/EmailLoginApi";
import { loginValidation } from "../hooks/validation";
import { useNavigate } from "react-router-dom";

const EmailLogin = () => {
  const setIsLogin = useSetRecoilState(loginState);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<LoginUserPropType>({
    mode: "onChange",
    resolver: zodResolver(loginValidation),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLogin: SubmitHandler<LoginUserPropType> = async (
    e: LoginUserPropType
  ) => {
    console.log("test");
    console.log(e);
    const response = await LoginApi({
      email: e.email,
      password: e.password,
    });
    console.log(response);
    if (response.data.trim() === "로그인 성공") {
      const accessToken = response.headers["authorization"].split(" ")[1];
      localStorage.setItem("accessToken", accessToken);
      setIsLogin(true);
      navigate("/main");
    } else if (response.data.trim() === "등록되지 않은 이메일입니다.") {
      const choice = window.confirm(
        "등록되지 않은 이메일입니다. 회원가입하시겠습니까?"
      );
      if (choice) {
        navigate("/emailauth");
      } else {
        return;
      }
    } else {
      setError("password", { message: "비밀번호가 틀렸습니다." });
    }
  };

  return (
    <LoginFormContainer>
      <TitleSection>
        <Text font={"title1"}>로그인</Text>
        <Text font={"title5"}>
          저희 서비스를 이용해주셔서 감사합니다. <br /> 보다 나은 이용을 위해
          로그인해주시면 <br />
          감사하겠습니다.
        </Text>
      </TitleSection>

      <form onSubmit={handleSubmit(handleLogin)}>
        <div>
          <label htmlFor="email">
            <Text font={"title3"}>아이디</Text>
          </label>
          <Input
            type="text"
            id="email"
            placeholder="아이디를 입력해주세요."
            {...register("email")}
          />
          {errors.email ? (
            <ErrorMessage>{errors.email.message}</ErrorMessage>
          ) : (
            <DefaultMessage />
          )}

          <label htmlFor="password">
            <Text font={"title3"}>비밀번호</Text>
          </label>
          <Input
            type="password"
            id="password"
            placeholder="비밀번호를 입력해주세요."
            {...register("password")}
          />
          {errors.password ? (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          ) : (
            <DefaultMessage />
          )}
        </div>
        <ButtonSection>
          <SubmitButton type="submit" value="로그인" />
        </ButtonSection>
      </form>
    </LoginFormContainer>
  );
};

const LoginFormContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`;

const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  margin: 5rem 0;
`;

const ErrorMessage = styled.div`
  display: block;
  color: ${theme.colors.red};
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

const DefaultMessage = styled.div`
  height: 4rem;
`;

const Input = styled.input`
  width: 100%;
  height: 3.4rem;
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 0.4rem;
  background-color: ${theme.colors.grey4};
  border: 1px solid ${theme.colors.grey4};
`;

const ButtonSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const SubmitButton = styled.input`
  cursor: pointer;
  width: 100%;
  height: 4rem;
  letter-spacing: -0.032rem;
  background-color: ${({ theme }) => theme.colors.grey2};
  color: ${({ theme }) => theme.colors.black};
  border-radius: 0.5rem;
  border: 1px solid ${theme.colors.grey4};
  &:hover {
    background-color: ${({ theme }) => theme.colors.main2};
  }
`;

export default EmailLogin;
