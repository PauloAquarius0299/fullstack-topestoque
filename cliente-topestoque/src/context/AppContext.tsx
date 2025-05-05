import { createContext, ReactNode, useEffect, useState } from "react";
import { getCategories } from "../state/CategoryService";
import { Category } from "../types"; 

interface AuthData {
  token: string | null;
  role: string | null;
}

interface AppContextType {
  categories: Category[];
  setCategories: React.Dispatch<React.SetStateAction<Category[]>>;
  auth: AuthData;
  setAuthData: (token: string | null, role: string | null) => void;
}

// Define props for the provider component
interface AppContextProviderProps {
  children: ReactNode;
}

// Create context with initial value and type
export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [auth, setAuth] = useState<AuthData>({ token: null, role: null });
  
    useEffect(() => {
      async function loadData() {
        try {
          const response = await getCategories();
          setCategories(response.data);
        } catch (error) {
          console.error("Failed to load categories:", error);
        }
      }
      loadData();
    }, []);
  
    const setAuthData = (token: string | null, role: string | null) => {
      setAuth({ token, role });
    };
  
    useEffect(() => {
      const token = localStorage.getItem("token");
      const role = localStorage.getItem("role");
      if (token) {
        setAuthData(token, role);
      }
    }, []);
  
    const contextValue: AppContextType = {
      categories,
      setCategories,
      auth,
      setAuthData,
    };
  
    return (
      <AppContext.Provider value={contextValue}>
        {children}
      </AppContext.Provider>
    );
  };
  
