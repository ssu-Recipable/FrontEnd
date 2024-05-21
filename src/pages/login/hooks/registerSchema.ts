import { z } from "zod";

export type RegisterSchemaType = z.infer<typeof registerSchema>;

export const registerSchema = z
  .object({
    nickname: z.string().min(1, { message: "닉네임은 필수 입력입니다." }),
    email: z
      .string()
      .email({ message: "이메일 형삭에 맞게 입력해주세요." })
      .min(1, { message: "이메일은 필수 입력입니다." }),
    password: z
      .string()
      .regex(
        /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/,
        "영문+숫자+특수문자(! @ # $ % & * ?) 조합 8~15자리를 입력해주세요."
      )
      .min(1, { message: "비밀번호는 필수 입력입니다." }),
    passwordCheck: z
      .string()
      .min(1, { message: "비밀번호를 다시 입력해주세요." }),
  })
  .refine((data) => data.password === data.passwordCheck, {
    path: ["passwordCheck"],
    message: "비밀번호가 일치하지 않습니다.",
  });
