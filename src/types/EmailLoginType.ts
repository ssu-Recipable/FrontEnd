export interface UserPropType {
  nickname: string;
  email: string;
  authcode?: string;
  password: string;
  passwordCheck?: string;
}

export interface LoginUserPropType {
  email: string;
  password: string;
}

export interface EmailCheckRequest {
  email: string;
}

export interface RegisterRequesst {
  nickname: string;
  loginId: string;
  password: string;
}
