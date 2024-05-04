export interface AddIngredientType {
  id: number;
  category: string;
  ingredient: string;
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
  ingredientList: AddIngredientType[];
  onRemove: (id: number) => void;
}
