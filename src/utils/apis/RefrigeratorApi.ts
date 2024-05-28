import { RefrigeratorResponse } from "@/types/RefrigeratorType";
import { api } from "./axios";


export const RefrigeratorApi = async () => {
    const response = await api.get<RefrigeratorResponse>('/refrigerators');
    return response.data.data.refrigeratorList;
}