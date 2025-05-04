// context/AppContext.tsx
import { createContext, ReactNode, useEffect, useState } from "react";
import { Category } from "../types";
import { getCategories } from "../state/CategoryService";

// Interface para o objeto de autenticação
interface AuthData {
  token: string | null;
  role: string | null;
}

// Atualize a interface do contexto
interface AppContextType {
  categories: Category[];
  setCategories: React.Dispatch<React.SetStateAction<Category[]>>;
  auth: AuthData;
  setAuthData: (token: string | null, role: string | null) => void;
}

const defaultContextValue: AppContextType = {
  categories: [],
  setCategories: () => {},
  auth: { token: null, role: null },
  setAuthData: () => {},
};

export const AppContext = createContext<AppContextType>(defaultContextValue);

interface AppContextProviderProps {
  children: ReactNode;
}

export const AppContextProvider = (props: AppContextProviderProps) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [auth, setAuth] = useState<AuthData>({ token: null, role: null });

  useEffect(() => {
    async function loadData() {
      const res = await getCategories();
      setCategories(res.data);
    }
    loadData();
  }, []);

  const setAuthData = (token: string | null, role: string | null) => {
    setAuth({ token, role });
  };

  const contextValue: AppContextType = {
    categories,
    setCategories,
    auth,
    setAuthData,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {props.children}
    </AppContext.Provider>
  );
};