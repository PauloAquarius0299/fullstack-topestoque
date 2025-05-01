const UserForm = () => {
    return (
      <div className="p-4 md:p-8 w-full max-w-2xl mx-auto">
        <div className="flex flex-col gap-8">
          <div className="w-full bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 md:p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-8">Cadastro de Usuário</h2>
            
            <form className="space-y-8">
              
  
              {/* Campo Nome */}
              <div className="space-y-1">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nome Completo
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  </div>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Digite seu nome completo"
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
              </div>
  
              {/* Campo Email */}
              <div className="space-y-1">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Endereço de Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  
                  </div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="seu.email@exemplo.com"
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
              </div>
  
              {/* Campo Senha */}
              <div className="space-y-1">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Senha
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                   
                  </div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
                <p className="mt-2 text-xs text-gray-500">Use 8 ou mais caracteres com uma mistura de letras, números e símbolos</p>
              </div>
  
              {/* Botão de Submit */}
              <div className="pt-4">
                <button 
                  type="submit" 
                  className="w-full button-primary"
                >
                  Cadastrar Usuário
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
  
  export default UserForm