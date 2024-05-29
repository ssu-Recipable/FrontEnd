import { EditIngrdientRequest, IngredientResponse } from "@/types/IngredientType";
import { api } from "./axios";

export const ViewIngredientApi = async (id: string) => {
    const response = await api.get<IngredientResponse>(`/refrigerators/${id}`);
    return response.data.data;
}

export const EditIngrdientApi = (id: string, formData: FormData) => {
    return api.patch<EditIngrdientRequest>(`/refrigerators/${id}`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
          },
    });
}

export const DeleteIngridientApi = (id: string) => {
    return api.delete(`/refrigerators/${id}`);
}