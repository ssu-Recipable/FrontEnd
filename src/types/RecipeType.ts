interface RecipeVideo {
    videoUrl: string,
    title: string,
    thumbnail: string,
}

export interface Recipe {
    recipeId?: number;
    recipeImg?: string;
    recipeName: string;
    introduce: string;
    ingredients?: string;
    recipeDetails?: string;
    RecipeVideoList?: RecipeVideo[]; 
}

interface ImageUrl {
    imageUrl: string
}

export interface RecipeImageResponse {
    status: string,
    message: string,
    data: ImageUrl
}

export interface RecipeRequest {
    recipeName: string,
    recipeImg: string,
    introduce: string,
    ingredients: string,
    recipeDetails: string,
    query: string,
}

interface RecipeDetailResponse {
    recipeId: number,
    recipeName: string,
    introduce: string,
    recipeImg: string,
    ingredients: string,
    recipeDetails: string,
    recipeVideoResponses: RecipeVideo[],
    bookmark: boolean
}

export interface RecipeResponse {
    status: number,
    message: string,
    data: RecipeDetailResponse,
}