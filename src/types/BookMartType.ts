export interface BookMarkData {
  recipeId: number;
  recipeName: string;
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
