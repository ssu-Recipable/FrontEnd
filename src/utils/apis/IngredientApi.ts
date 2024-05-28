import { IngredientResponse } from "@/types/IngredientType";
import { api } from "./axios";

export const IngredientApi = async (id: string) => {
    const response = await api.get<IngredientResponse>(`/refrigerators/${id}`);
    return response.data.data;
}