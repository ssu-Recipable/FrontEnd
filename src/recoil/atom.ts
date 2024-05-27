import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const loginState = atom<boolean>({
  key: "LoginState",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const nickNameState = atom<string>({
  key: "NickNameState",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const kakakLoginState = atom<boolean>({
  key: "KakaoLoginState",
  default: false,
  effects_UNSTABLE: [persistAtom],
});
