import { RecipeImageResponse, RecipeRequest, RecipeResponse } from "@/types/RecipeType";
import { api } from "./axios";

export const GetRecipeImgApi = async (imageName: string) => {
    const res = await api.get<RecipeImageResponse>(`/recipe/image?imageName=${imageName}`);
    return res.data.data.imageUrl;
};

export const GetRecipeApi = async (id: string) => {
    const res = await api.get<RecipeResponse>(`/recipe/${id}`);
    return res.data.data;
}

export const SaveRecipeApi = async (recipe: RecipeRequest) => {
    return await api.post(`https://recipable.store/recipe`, recipe);
}