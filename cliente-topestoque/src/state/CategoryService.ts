import axios from "axios";

export const addCategory = async (category: string) => {
    return await axios.post("http://localhost:8080/api/v1.0/categories", category)
}

export const deleteCategories = async (categoryId: string) => {
    return await axios.delete(`http://localhost:8080/api/v1.0/categories/${categoryId}`)
}

export const getCategories = async () => {
    return await axios.get("http://localhost:8080/api/v1.0/categories")
}
