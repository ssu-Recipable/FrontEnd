interface RecipeVideo {
    videoUrl: string,
    title: string,
    thumbnail: string,
}

export interface Recipe {
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