import axios from "axios";
import { CategoryResponse, FormData } from "../types";

const api = axios.create({
  baseURL: "http://localhost:8080/api/v1.0",
  headers: {
    "Authorization": `Bearer ${localStorage.getItem("token") || ""}`
  }
});

export const addCategory = async (data: FormData): Promise<CategoryResponse> => {
  const response = await api.post<CategoryResponse>("/admin/categories", data, {
    headers: {
      "Content-Type": "multipart/form-data" 
    }
  });
  return response.data;
};

// Versão alternativa com fetch (se preferir)
export const addCategoryWithFetch = async (data: FormData): Promise<CategoryResponse> => {
  const response = await fetch('http://localhost:8080/api/v1.0/admin/categories', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem("token")}`
    },
    body: data
  });
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  return await response.json();
};

export const deleteCategories = async (categoryId: string): Promise<void> => {
  await api.delete(`/admin/categories/${categoryId}`);
};

export const getCategories = async (): Promise<CategoryResponse> => {
  const response = await api.get<CategoryResponse>("/categories");
  return response.data;
};