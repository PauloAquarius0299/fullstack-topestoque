import { useContext, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { deleteCategories } from "../../state/CategoryService";
import toast from "react-hot-toast";
import { AppContext } from "../../context/AppContext";

const CategoryList = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("AppContext is not available");
  }

  const { categories, setCategories } = context;
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );  
  
  const deleteByCategoryId = async (categoryId: string) => {
    try {
      const res = await deleteCategories(categoryId);
      if (res.status === 204) {
        const updatedCategories = categories.filter(
          (category) => category.categoryId !== categoryId
        );
        setCategories(updatedCategories);
        toast.success("Categoria removida com sucesso!");
      } else {
        toast.error("Impossível deletar essa categoria");
      }
    } catch (error) {
      console.error(error);
      toast.error("Erro ao remover categoria");
    }
  };

  return (
    <div className="h-full overflow-y-auto">
      <div className="mb-4">
        <div className="flex items-center gap-2 w-full">
          <input
            type="text"
            name="keyword"
            id="keyword"
            placeholder="Pesquise por categorias..."
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="p-2 bg-blue-400 cursor-pointer hover:bg-blue-200 text-white rounded-md">
            <CiSearch />
          </span>
        </div>
      </div>

      <div className="product-grid">
        {filteredCategories.map((category, index) => (
          <div key={index} className="product-card relative">
            <div
              className="flex items-center gap-4 p-4 rounded-lg"
              style={{ backgroundColor: category.bgColor }}
            >
              <img
                src={category.imageUrl}
                alt={category.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="flex-1">
                <h2 className="text-base font-semibold text-gray-900 capitalize">
                  {category.name}
                </h2>
                <p>Items: 5</p>
              </div>
              <button
                title="Remover"
                onClick={() => deleteByCategoryId(category.categoryId)}
                className="absolute cursor-pointer top-2 right-2 text-red-600 hover:text-red-400 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
