export interface UserDataResponse {
  data: {
    nickname: string;
    userImg: string;
  };
}

export interface MainRecipe {
  recipeId: number;
  recipeName: string;
  recipeImg: string;
  introduce: string;
}

export interface MainDataResponse {
  data: {
    todayRecipe: MainRecipe;
    recentRecipes: MainRecipe[];
  };
}
