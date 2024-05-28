interface SimpleIngredient {
    ingredientId: number;
    ingredientName: string;
    expiredRemaining: number | null;
    igredientImage: string | null;
}

export interface IngredientCategory {
    categoryName: string;
    detailContent: string;
    refrigeratorDetailList: SimpleIngredient[] | null;
}

export interface RefrigeratorResponse {
    status: number,
    message: string,
    data: {
        refrigeratorList: IngredientCategory[]
    }
}