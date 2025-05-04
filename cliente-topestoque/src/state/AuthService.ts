import axios from "axios"
import { LoginData, LoginResponse } from "../types";

export const login = async (data: LoginData): Promise<LoginResponse> => {
    const response = await axios.post<LoginResponse>(
      "http://localhost:8080/api/v1.0/login",
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  };