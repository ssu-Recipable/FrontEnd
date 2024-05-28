import { api } from "./axios";

export const IngredientApi = async (id: number) => {
    const response = await api.get(`/refrigerators/${id}`);
    return response.data;
}