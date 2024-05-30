import { SignUpResponse, UserType } from "@/types/kakaoLoginType";
import { api } from "./axios";

export const kakaoAuthCodeApi = (authCode: string) => {
  return api.get<string | SignUpResponse>(`/login/kakao?code=${authCode}`);
};

export const KakaoSignUpApi = (userData: UserType) => {
  return api.post(`/sign-up`, userData);
};
