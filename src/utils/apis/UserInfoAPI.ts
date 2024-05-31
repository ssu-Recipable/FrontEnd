import { MainDataResponse, UserDataResponse } from "@/types/MainType";
import { api } from "./axios";

export const RequestUserInfo = () => {
  return api.get<UserDataResponse>("/users/info");
};

export const ChangeUserInfo = (nickName: string) => {
  return api.patch<UserDataResponse>("users/info", nickName);
};

export const DeleteUserInfo = () => {
  return api.delete<string>("/users/info");
};

export const LoadMainData = async () => {
  const response = await api.get<MainDataResponse>("users/main");
  console.log(response.data);
  return response.data;
};
