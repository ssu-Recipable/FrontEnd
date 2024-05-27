import Text from "@/components/commonComponents/Text";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import { registerValidation } from "../hooks/validation";
import { theme } from "@/styles/theme";
import { EmailCheckApi, RegisterApi } from "@/utils/apis/EmailLoginApi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserPropType } from "@/types/EmailLoginType";

const EmailAuth = () => {
  const [checkAuthCode, setCheckAuthCode] = useState<boolean>(false);
  const [isEmailCheck, setIsEmailCheck] = useState<boolean>(false);
  const [authCodeValue, setAuthCodeValue] = useState<string>("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setError,
  } = useForm<UserPropType>({
    mode: "onChange",
    resolver: zodResolver(registerValidation),
    defaultValues: {
      nickname: "",
      email: "",
      authcode: "",
      password: "",
      passwordCheck: "",
    },
  });

  const checkEmail = async () => {
    if (watch("email").trim().length === 0) {
      alert("이메일을 입력해주세요!");
    } else {
      try {
        const response = await EmailCheckApi({ email: watch("email") });
        console.log(response.data.code);
        if (response.data.code === "이미 등록된 사용자 입니다.") {
          setError("email", {
            message: "이미 등록된 이메일입니다. 다른 이메일을 입력해주세요!",
          });
        } else {
          alert("입력하신 이메일로 인증 번호가 전송되었습니다!");
          setCheckAuthCode(true);
          // if (typeof response.data.code === "string") {
          //   console.log("test");
          // }
          setAuthCodeValue(response.data.code);
        }
      } catch (err) {
        console.error(err);
      }
    }
  };

  const checkAuthCodeCorrect = () => {
    if (watch("authcode") === authCodeValue) {
      alert("인증이 완료되었습니다.");
      setIsEmailCheck(true);
    } else {
      console.log("error");
    }
  };

  const handleRegister: SubmitHandler<UserPropType> = async (
    e: UserPropType
  ) => {
    try {
      if (isEmailCheck) {
        console.log(e);
        const response = await RegisterApi({
          nickname: e.nickname,
          loginId: e.email,
          password: e.password,
        });
        console.log(response);
        navigate("/emaillogin");
      } else {
        alert("이메일 인증을 진행해주세요!");
        console.log("test");
        return;
      }
    } catch (err) {
      console.error(err);
    }
  };

  const authCodeContent = (
    <>
      <div style={{ position: "relative" }}>
        <label htmlFor="authcode">
          <Text font={"title3"}>인증번호 입력</Text>
        </label>
        <Input
          type="text"
          id="authcode"
          placeholder="인증번호를 입력해주세요."
          {...register("authcode")}
        />
        <EmailAuthButton type="button" onClick={checkAuthCodeCorrect}>
          확인
        </EmailAuthButton>
      </div>
      {errors.authcode ? (
        <ErrorMessage>{errors.authcode.message}</ErrorMessage>
      ) : (
        <DefaultMessage />
      )}
    </>
  );

  return (
    <AuthFormContainer>
      <TitleSection>
        <Text font={"title1"}>회원가입</Text>
        <Text font={"title5"}>회원가입에 필요한 정보를 기입해주세요.</Text>
      </TitleSection>
      <form onSubmit={handleSubmit(handleRegister)}>
        <div>
          <label htmlFor="nickname">
            <Text font={"title3"}>닉네임</Text>
          </label>
          <Input
            type="text"
            id="nickname"
            placeholder="닉네임을 입력해주세요."
            {...register("nickname")}
          />
          {errors.nickname ? (
            <ErrorMessage>{errors.nickname.message}</ErrorMessage>
          ) : (
            <DefaultMessage />
          )}

          <label htmlFor="email">
            <Text font={"title3"}>이메일</Text>
          </label>
          <div style={{ position: "relative" }}>
            <Input
              type="text"
              id="email"
              placeholder="이메일을 입력해주세요."
              {...register("email")}
            />
            <EmailAuthButton type="button" onClick={checkEmail}>
              이메일 인증
            </EmailAuthButton>
          </div>
          {errors.email ? (
            <ErrorMessage>{errors.email.message}</ErrorMessage>
          ) : (
            <DefaultMessage />
          )}

          {checkAuthCode ? authCodeContent : null}

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

          <label htmlFor="passwordCheck">
            <Text font={"title3"}>비밀번호 확인</Text>
          </label>
          <Input
            type="password"
            id="passwordCheck"
            placeholder="비밀번호를 다시 입력해주세요."
            {...register("passwordCheck")}
          />
          {errors.passwordCheck ? (
            <ErrorMessage>{errors.passwordCheck.message}</ErrorMessage>
          ) : (
            <DefaultMessage />
          )}
        </div>
        <ButtonSection>
          <SubmitButton type="submit" value="회원가입하기" />
        </ButtonSection>
      </form>
    </AuthFormContainer>
  );
};

const AuthFormContainer = styled.div`
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
  margin: 5rem 0 1rem 0;
`;

const EmailAuthButton = styled.button`
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  background-color: ${theme.colors.grey2};
  color: ${theme.colors.black};
  padding: 0.3rem;
  border-radius: 0.4rem;
  &:hover {
    background-color: ${theme.colors.main2};
  }
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
  text-align: center;
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

export default EmailAuth;
