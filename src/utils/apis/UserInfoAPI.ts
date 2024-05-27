import { api } from "./axios";

interface UserDataResponse {
  data: {
    nickname: string;
    userImg: string;
  };
}

export const RequestUserInfo = () => {
  return api.get<UserDataResponse>("/users/info");
};

export const ChangeUserInfo = (nickName: string) => {
  return api.put<UserDataResponse>("users/info", nickName);
};

export const DeleteUserInfo = () => {
  return api.delete<string>("/users/info");
};
