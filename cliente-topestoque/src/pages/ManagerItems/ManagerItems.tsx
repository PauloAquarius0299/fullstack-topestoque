import ItemsForm from "../../components/ItemsComponents/ItemsForm"
import ItemsList from "../../components/ItemsComponents/ItemsList"


const ManagerItems = () => {
  return (
    <div className="w-full h-screen bg-gray-50 flex items-center justify-center px-4">
    <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-8 w-full max-w-screen-xl h-[90%] flex flex-col md:flex-row gap-8">
      {/* Formulário - 2/3 */}
      <div className="md:w-2/3 w-full flex flex-col justify-start">
        <div className="bg-gray-50 p-6 rounded-lg flex-1 overflow-y-auto">
          <ItemsForm />
        </div>
      </div>

      {/* Lista - 1/3 */}
      <div className="md:w-1/3 w-full flex flex-col justify-start">
        <div className="bg-gray-100 p-6 rounded-lg border border-dashed border-gray-300 text-right h-full">
         <ItemsList />
        </div>
      </div>
    </div>
  </div>
  )
}

export default ManagerItems