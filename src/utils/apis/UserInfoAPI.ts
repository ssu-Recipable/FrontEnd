import { api } from "./axios";

export interface UserDataResponse {
  data: {
    nickname: string;
    userImg: string;
  };
}

export interface MainDataResponse {
  data: {
    todayReceipt: {
      recipeId: number;
      recipeName: string;
      recipeImg: string;
      introduce: string;
    };
    recentReceipes: string[];
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

export const LoadMainData = () => {
  return api.get<MainDataResponse>("users/main");
};
