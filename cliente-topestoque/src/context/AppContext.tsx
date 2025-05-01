import { createContext, ReactNode, useEffect, useState } from "react";
import { Category } from "../types";
import { getCategories } from "../state/CategoryService";

interface AppContextType {
    categories: Category[];
    setCategories: React.Dispatch<React.SetStateAction<Category[]>>;
}

const defaultContextValue: AppContextType = {
    categories: [],
    setCategories: () => {},
};

export const AppContext = createContext<AppContextType>(defaultContextValue);

interface AppContextProviderProps {
    children: ReactNode;
}

export const AppContextProvider = (props: AppContextProviderProps) => {

    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        async function loadData() {
            const res = await getCategories();
            setCategories(res.data);
            console.log(res.data);
        }
        loadData();
    }, []);

    const contextValue: AppContextType = {
        categories,
        setCategories,
    };

    return <AppContext.Provider value={contextValue}>
        {props.children}
    </AppContext.Provider>;
};