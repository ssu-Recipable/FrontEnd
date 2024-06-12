export interface BookMarkData {
  recipeId: number;
  recipeName: string;
  recipeImg: string;
  introduce: string;
}

export interface BookMarkResponse {
  status: number;
  message: string;
  data: BookMarkData[];
}
