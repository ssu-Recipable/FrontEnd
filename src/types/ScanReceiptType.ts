export interface AddIngredientType {
  id: number;
  ingredientCategory: string;
  ingredientName: string;
}

export interface InputType {
  inputIngredient: string;
  setInputIngredient: React.Dispatch<React.SetStateAction<string>>;
}

export interface CategoryType {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}

export interface IngredientListType {
  isEdit: boolean;
  ingredientList: AddIngredientType[];
  onRemove: (id: number) => void;
}

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
