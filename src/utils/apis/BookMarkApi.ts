import { BookMarkResponse } from "@/types/BookMartType";
import { api } from "./axios";

export const GetBookMarkApi = async () => {
  const response = await api.get<BookMarkResponse>("/bookmark");
  console.log(response);
  return response.data;
};
