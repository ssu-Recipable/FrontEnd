import Text from "@/components/commonComponents/Text";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { registerSchema } from "../hooks/registerSchema";
import { theme } from "@/styles/theme";

interface UserPropType {
  nickname: string;
  email: string;
  password: string;
  passwordCheck: string;
}

const EmailAuth = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserPropType>({
    mode: "onChange",
    resolver: zodResolver(registerSchema),
    defaultValues: {
      nickname: "",
      email: "",
      password: "",
      passwordCheck: "",
    },
  });

  return (
    <LoginFormContainer>
      <TitleSection>
        <Text font={"title1"}>회원가입</Text>
        <Text font={"title5"}>회원가입에 필요한 정보를 기입해주세요.</Text>
      </TitleSection>
      <form onSubmit={handleSubmit((e) => console.log(e))}>
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
          <Input
            type="text"
            id="email"
            placeholder="이메일을 입력해주세요."
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
  margin: 5rem 0 3rem 0;
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

export default EmailAuth;
