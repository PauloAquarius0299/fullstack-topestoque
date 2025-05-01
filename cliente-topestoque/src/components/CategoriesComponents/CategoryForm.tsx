import upload from '../../assets/upload.png';

const CategoryForm = () => {
  return (
    <div className="p-4 md:p-8 w-full max-w-2xl mx-auto">
      <div className="flex flex-col gap-6">
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 md:p-8">
          <form className="space-y-6">
            {/* Upload de Imagem */}
            <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
              <label 
                htmlFor="image" 
                className="cursor-pointer flex flex-col items-center gap-2 group"
              >
                <div className="p-4 border-2 border-dashed border-gray-300 rounded-lg group-hover:border-blue-500 transition-colors duration-200">
                  <img 
                    src={upload} 
                    alt="Ícone de upload" 
                    width={48} 
                    className="rounded-md opacity-70 group-hover:opacity-100 transition-opacity duration-200" 
                  />
                </div>
                <span className="text-sm text-gray-500 group-hover:text-blue-600 transition-colors duration-200">
                  Clique para selecionar imagem
                </span>
              </label>
              <input 
                type="file" 
                name="image" 
                id="image" 
                accept="image/*" 
                className="hidden" 
              />
            </div>

            {/* Nome da categoria */}
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nome da Categoria
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Ex: Eletrônicos, Moda, Decoração..."
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            {/* Descrição */}
            <div className="space-y-2">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                Descrição
              </label>
              <textarea
                rows={4}
                name="description"
                id="description"
                placeholder="Forneça uma descrição detalhada desta categoria..."
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 min-h-[120px]"
              ></textarea>
            </div>

            {/* Cor de fundo */}
            <div className="space-y-2">
              <label htmlFor="bgColor" className="block text-sm font-medium text-gray-700 mb-1">
                Cor de Destaque
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="color"
                  name="bgColor"
                  id="bgColor"
                  defaultValue="#07224d" // Cor azul padrão
                  className="w-12 h-12 p-1 border border-gray-300 rounded-md cursor-pointer hover:ring-2 hover:ring-gray-200 transition-all duration-200"
                />
                <span className="text-sm text-gray-500">
                  Selecione uma cor para identificar a categoria
                </span>
              </div>
            </div>

            {/* Botão de Salvar */}
            <div className="pt-8">
              <button 
                type="submit" 
                className="w-full button-primary mt-8"
              >
                Salvar Categoria
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CategoryForm;