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

  export   interface FormData {
    name: string;
    description: string;
    bgColor: string;
}