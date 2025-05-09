import { useState } from "react"
import { addUser } from "../../state/UserService";
import toast from "react-hot-toast";
import { User } from "../../types";

interface UserListProps {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
}

const UserForm: React.FC<UserListProps> = ({setUsers}) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'ROLE_USER'
  });

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value: string = e.target.value;
    const name: string = e.target.name;
    setData({...data, [name]: value});
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault(e);
    setLoading(true);
    try {
      const response = await addUser(data);
      setUsers((prevUsers)=> [...prevUsers, response.data]);
      toast.success('User added');
      setData({
        name: '',
        email: '',
        password: '',
        role: 'ROLE_USER'
      })
    } catch (e) {
      console.error(e);
      toast.error('Error adding user')
    } finally {
      setLoading(false);
    }
  }

    return (
      <div className="p-4 md:p-8 w-full max-w-2xl mx-auto">
        <div className="flex flex-col gap-8">
          <div className="w-full bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 md:p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-8">Cadastro de Usuário</h2>
            
            <form className="space-y-8" onSubmit={onSubmitHandler} >
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
                    onChange={onChangeHandler}
                    value={data.name}
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
                    onChange={onChangeHandler}
                    value={data.email}
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
                    onChange={onChangeHandler}
                    value={data.password}
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
                  disabled={loading}
                >
                  {loading ? 'Loading...' : "Cadastrar Usuário"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
  
  export default UserForm