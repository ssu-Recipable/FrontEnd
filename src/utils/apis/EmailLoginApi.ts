import {
  EmailCheckRequest,
  LoginUserPropType,
  RegisterRequesst,
} from "@/types/EmailLoginType";
import { api } from "./axios";

export interface EmailCheckResponse {
  code: string;
}

export const EmailCheckApi = (EmailCheckRequest: EmailCheckRequest) => {
  return api.post<EmailCheckResponse>("/send-email", EmailCheckRequest);
};

export const RegisterApi = (RegisterRequest: RegisterRequesst) => {
  return api.post<string>("/register", RegisterRequest);
};

export const LoginApi = (LoginRequest: LoginUserPropType) => {
  return api.post<string>("/login/local", LoginRequest);
};
