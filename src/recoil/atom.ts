import { atom } from "recoil";

export const loginState = atom<boolean>({
  key: "LoginState",
  default: false,
});
