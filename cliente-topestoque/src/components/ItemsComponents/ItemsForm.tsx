import upload from '../../assets/upload.png';

const ItemsForm = () => {
  return (
    <div className="p-4 md:p-8 w-full max-w-2xl mx-auto">
      <div className="flex flex-col gap-6">
        <div className="w-full bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Cadastro de Item</h2>
          
          <form className="space-y-6">
            {/* Upload de Imagem */}
            <div className="flex flex-col items-center gap-4">
              <label 
                htmlFor="image" 
                className="cursor-pointer flex flex-col items-center gap-3 group"
              >
                <div className="p-6 border-2 border-dashed border-gray-300 rounded-xl group-hover:border-blue-500 transition-colors duration-200 bg-gray-50">
                  <img 
                    src={upload} 
                    alt="Ícone de upload" 
                    width={56} 
                    className="opacity-70 group-hover:opacity-100 transition-opacity duration-200" 
                  />
                </div>
                <span className="text-sm text-gray-500 group-hover:text-blue-600 transition-colors duration-200">
                  Clique para enviar imagem do item
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

            {/* Nome do Item */}
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Nome do Item
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Ex: Smartphone XYZ, Camiseta Premium..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            {/* Categoria */}
            <div className="space-y-2">
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                Categoria
              </label>
              <select 
                name="category" 
                id="category"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 appearance-none bg-white"
              >
                <option value="">Selecione uma categoria</option>
                <option value="Category 1">Eletrônicos</option>
                <option value="Category 2">Moda</option>
                <option value="Category 3">Decoração</option>
              </select>
            </div>

            {/* Preço */}
            <div className="space-y-2">
              <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-2">
                Preço
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                  R$
                </span>
                <input 
                  type="number" 
                  name="price" 
                  id="price" 
                  placeholder="200.00" 
                  className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200" 
                  step="0.01"
                  min="0"
                />
              </div>
            </div>

            {/* Descrição */}
            <div className="space-y-2">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                Descrição
              </label>
              <textarea
                rows={4}
                name="description"
                id="description"
                placeholder="Descreva detalhes sobre o item, características, especificações..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 min-h-[120px]"
              ></textarea>
            </div>

            {/* Cor de Destaque */}
            <div className="space-y-2">
              <label htmlFor="bgColor" className="block text-sm font-medium text-gray-700 mb-2">
                Cor de Destaque
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="color"
                  name="bgColor"
                  id="bgColor"
                  defaultValue="#07224d"
                  className="w-12 h-12 p-1 border border-gray-300 rounded-lg cursor-pointer hover:ring-2 hover:ring-gray-200 transition-all duration-200"
                />
                <span className="text-sm text-gray-500">
                  Selecione uma cor para identificar o item
                </span>
              </div>
            </div>

            {/* Botão de Salvar */}
            <div className="pt-4">
              <button 
                type="submit" 
                className="w-full button-primary"
              >
                Cadastrar Item
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ItemsForm