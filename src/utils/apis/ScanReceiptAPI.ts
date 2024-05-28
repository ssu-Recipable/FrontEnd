import { IngredientResponse } from "@/types/ScanReceiptType";
import { api } from "./axios";

export const ResultScan = (receipt: FormData) => {
  return api.post<IngredientResponse>("/receipt", receipt, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
