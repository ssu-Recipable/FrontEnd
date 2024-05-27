import { api } from "./axios";

interface Ingredient {
  ingredientCategory: string;
  ingredientName: string;
}

interface IngredientResponse {
  data: {
    ingredientResponseList: Ingredient[];
  };
}

export const ResultScan = (receipt: FormData) => {
  return api.post<IngredientResponse>("/receipt", receipt);
};
