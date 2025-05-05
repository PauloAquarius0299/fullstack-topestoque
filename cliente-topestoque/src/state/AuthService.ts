import { LoginData, LoginResponse } from "../types";

export const login = async (data: LoginData): Promise<LoginResponse> => {
  const response = await fetch("http://localhost:8080/api/v1.0/login", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  });

  if (!response.ok) {
    throw new Error("Erro de autenticação");
  }

  return response.json();
};