export interface AddIngredientType {
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
