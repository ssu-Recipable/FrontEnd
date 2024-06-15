import { BookMarkResponse } from "@/types/BookMarkType";
import { api } from "./axios";

export const GetBookMarkApi = async () => {
  const response = await api.get<BookMarkResponse>("/bookmark");
  console.log(response.data);
  return response.data;
};

export const PostBookMarkApi = (id: string) => {
  return api.post(`/bookmark/${id}`);
};

export const DeleteBookMarkApi = (id: string) => {
  return api.delete(`/bookmark/${id}`);
};
