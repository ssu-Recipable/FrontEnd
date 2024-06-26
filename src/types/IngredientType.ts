interface Ingredient {
    ingredientImage: string;
    ingredientName: string;
    categoryName: string;
    expirationDay: string;
    memo: string;
}

export interface IngredientResponse {
    status: number;
    message: string;
    data: Ingredient;
}

export interface UpdateIngredientRequest {
    ingredientName?: string;
    categoryName?: string;
    expirationDay?: string;
    memo?: string;
}

export interface EditIngrdientRequest {
    updateIngredientRequest?: UpdateIngredientRequest;
    multipartFile?: File;
}