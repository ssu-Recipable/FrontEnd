import { RecipeImageResponse } from "@/types/RecipeType";
import { api } from "./axios";

export const GetRecipeImgApi = async (imageName: string) => {
    const res = await api.get<RecipeImageResponse>(`/recipe/image?imageName=${imageName}`);
    return res.data.data.imageUrl;
};