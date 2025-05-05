import axios from "axios";
import { CategoryResponse  } from "../types";

export const api = axios.create({
  baseURL: "http://localhost:8080/api/v1.0", // ou o que fizer sentido no seu projeto
});

export const addCategory = async (category: CategoryResponse) => {
  return await api.post(`http://localhost:8080/api/v1.0/admin/categories`, category, {headers: {'Authorization': `Bearer ${localStorage.getItem("token")}`}})
};

export const deleteCategories = async (categoryId: string) => {
  return await api.delete(`http://localhost:8080/api/v1.0/admin/categories/${categoryId}`, {headers: {'Authorization': `Bearer ${localStorage.getItem("token")}`}});
};


export const getCategories = async () => {
  return await api.get<CategoryResponse[]>("http://localhost:8080/api/v1.0/categories", {headers: {'Authorization': `Bearer ${localStorage.getItem("token")}`}});
};
