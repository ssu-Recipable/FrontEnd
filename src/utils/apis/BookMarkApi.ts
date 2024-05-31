import { api } from "./axios";

export interface BookMarkData {
  recipeId: number;
  recipeImg: string;
  introduce: string;
}

export interface BookMarkResponse {
  data: {
    status: number;
    message: string;
    data: BookMarkData[];
  };
}

export const GetBookMarkApi = async () => {
  const response = await api.get<BookMarkResponse>("/bookmark");
  console.log(response);
  return response.data;
};
