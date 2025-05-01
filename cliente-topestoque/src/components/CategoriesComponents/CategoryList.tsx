import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const CategoryList = () => {
  const { categories } = useContext(AppContext);

  return (
    <div className="h-screen overflow-y-auto overflow-x-hidden p-4">
      <div className="p-2 mb-4">
        {/* Search bar placeholder */}
       
      </div>

      <div className="space-y-3 p-2">
        {categories.map((category, index) => (
          <div key={index} className="w-full">
            <div
              className="p-6 rounded-lg shadow-sm"
              style={{ backgroundColor: category.bgColor }}
            >
              <div className="flex items-center ">
                <div className="mr-4">
                  <img
                    src={category.imageUrl}
                    alt={category.name}
                    className="w-12 h-12 object-cover rounded-full"
                  />
                </div>
                <div className="flex-grow">
                  <h5 className="text-lg font-semibold text-gray-900 mb-1">
                    {category.name}
                  </h5>
                  <p className="text-gray-700">{category.description}</p>
                </div>
                <div>
                  <button className="p-2 text-red-600 hover:bg-red-50 hover:text-red-400 cursor-pointer rounded-full transition-colors">
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;