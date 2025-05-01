import CategoryForm from "../../components/CategoriesComponents/CategoryForm";
import CategoryList from "../../components/CategoriesComponents/CategoryList";

const Dashboard = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4 md:p-8">
      <div className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden w-full max-w-screen-xl h-auto md:h-[90vh] flex flex-col md:flex-row">
        {/* Formulário - 2/3 */}
        <div className="md:w-2/3 w-full flex flex-col p-6 md:p-8 border-r border-gray-200">
          <div className="flex items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center">
              <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              Formulário de Categoria
            </h2>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 flex-1 overflow-y-auto">
            <CategoryForm />
          </div>
        </div>

        {/* Lista - 1/3 */}
        <div className="md:w-1/3 w-full flex flex-col p-6 md:p-8 bg-gray-50">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center">
              <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
              Lista de Categorias
            </h2>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
              {/* Número dinâmico de categorias pode ser adicionado aqui */}
            </span>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex-1 overflow-y-auto">
            <CategoryList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;