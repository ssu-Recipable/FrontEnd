export interface UploadFile {
  file: File;
  thumbnail: string;
  type: string;
}

export interface Ingredient {
  ingredientCategory: string;
  ingredientName: string;
}

export interface IngredientResponse {
  data: {
    ingredientResponseList: Ingredient[];
  };
}
