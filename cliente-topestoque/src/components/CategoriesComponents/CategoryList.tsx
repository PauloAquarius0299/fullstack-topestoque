import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const CategoryList = () => {
  const { categories } = useContext(AppContext);

  return (
    <div className="h-full overflow-y-auto p-4">
    <div className="product-grid">
      {categories.map((category, index) => (
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
              <p className="text-sm text-gray-700">{category.description}</p>
            </div>

            {/* Ícone de deletar dentro do card, no topo direito */}
            <button
              title="Remover"
              className="absolute top-2 right-2 text-red-600 hover:text-red-400 transition-colors"
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
