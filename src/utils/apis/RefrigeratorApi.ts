import { IngredientRequset } from "@/types/ScanReceiptType";
import { RefrigeratorResponse } from "@/types/RefrigeratorType";
import { api } from "./axios";

export const RefrigeratorApi = async () => {
  const response = await api.get<RefrigeratorResponse>("/refrigerators");
  return response.data.data.refrigeratorList;
};

export const AddRefrigeratorReceipt = (ingredients: IngredientRequset) => {
  return api.post<string>("/refrigerators/receipt", ingredients);
};

export const AddRefrigeratorDirect = (ingredients: IngredientRequset) => {
  return api.post<string>("/refrigerators", ingredients);
};
