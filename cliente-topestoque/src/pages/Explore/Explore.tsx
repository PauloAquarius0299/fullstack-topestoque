import { useContext } from "react"
import { AppContext } from "../../context/AppContext"

const Explore = () => {

  const {categories} = useContext(AppContext);
  console.log(categories);

  return (
    <div className="w-full max-w-[1200px] mx-auto flex flex-col md:flex-row gap-6 p-4 min-h-screen">
    {/* Left Column */}
    <div className="w-full md:w-2/3 flex flex-col bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-4 overflow-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Categories</h2>
        <div className="min-h-[200px] bg-gray-50 rounded flex items-center justify-center text-gray-500">
          Categories content
        </div>
      </div>
      <hr className="border-t border-gray-200" />
      <div className="p-4 overflow-auto flex-1">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Items</h2>
        <div className="min-h-[300px] bg-gray-50 rounded flex items-center justify-center text-gray-500">
          Items content
        </div>
      </div>
    </div>
    {/* Right Column */}
    <div className="w-full md:w-1/3 flex flex-col bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-4 min-h-[120px]">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Customer Form</h2>
        <div className="bg-gray-50 rounded flex items-center justify-center text-gray-500 h-full">
          Customer form
        </div>
      </div>
      <hr className="border-t border-gray-200 my-3" />
      <div className="p-4 flex-1">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Cart Items</h2>
        <div className="bg-gray-50 rounded flex items-center justify-center text-gray-500 h-[150px]">
          Cart items
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Cart Summary</h2>
        <div className="bg-gray-50 rounded flex items-center justify-center text-gray-500 h-[150px]">
          Cart summary
        </div>
      </div>
    </div>
</div>

  )
}

export default Explore