export interface UserDataResponse {
  data: {
    nickname: string;
    userImg: string;
  };
}

export interface TodayRecipe {
  recipeId: number;
  recipeName: string;
  recipeImg: string;
  introduce: string;
}

export interface RecentRecipes {
  recipeId: number;
  recipeImg: string;
  introduce: string;
}

export interface MainDataResponse {
  data: {
    todayRecipe: TodayRecipe;
    recentRecipes: RecentRecipes[];
  };
}
