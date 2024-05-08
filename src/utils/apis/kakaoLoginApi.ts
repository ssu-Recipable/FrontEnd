import { api } from "./axios";

export const kakaoAuthCodeApi = (authCode: string | null) => {
  return api.get<string>(`/api/login/kakao/?code=${authCode}`);
};
