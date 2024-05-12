import { api } from "./axios";

export const kakaoAuthCodeApi = (authCode: string | null) => {
  return api.get<string>(`/login/kakao?code=${authCode}`);
};
