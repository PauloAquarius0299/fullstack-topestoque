export interface Category {
    categoryId: string;
    name: string;
    description: string;
    bgColor: string;
    createdAt: Date;
    updatedAt: Date;
    imageUrl: string;
  }
export interface CategoryResponse {
    status: number;
    data: {
      id: string;
      name: string;
      description: string;
      bgColor: string;
      imageUrl: string;
    };
  }

export interface ChangeEvent {
    target: {
      name: string;
      value: string;
    };
  }

  export type CategoryFormData = {
    name: string;
    description: string;
    bgColor: string;
  };
// types/auth.ts
export interface LoginData {
  email: "";
  password: "";
}

export interface LoginResponse {
  token: "";
  role: "";
}

export interface User {
  userId: string;
  name: string;
  email: string;
};
