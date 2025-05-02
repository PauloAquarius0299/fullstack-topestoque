import axios from "axios";
import { CategoryResponse } from "../types";

export const addCategory = async (data: FormData): Promise<CategoryResponse> => {
    const response = await fetch('http://localhost:8080/api/v1.0/categories', {
      method: 'POST',
      body: data,
    });
    return response.json();
};

export const deleteCategories = async (categoryId: string) => {
    return await axios.delete(`http://localhost:8080/api/v1.0/categories/${categoryId}`)
}

export const getCategories = async () => {
    return await axios.get("http://localhost:8080/api/v1.0/categories")
}
