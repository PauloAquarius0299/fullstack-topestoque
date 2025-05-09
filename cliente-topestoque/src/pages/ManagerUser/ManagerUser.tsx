
import { useEffect, useState } from 'react'
import UserForm from '../../components/UsersComponents/UserForm'
import UserList from '../../components/UsersComponents/UserList'
import { fetchUsers } from '../../state/UserService';
import toast from 'react-hot-toast';

const ManagerUser = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadUsers() {
      try {
        setLoading(true);
        const response = await fetchUsers(); 
        setUsers(response.data);
      } catch (error) {
        console.error(error);
        toast.error("Unable to fetch users");
      } finally {
        setLoading(false);
      }
    }

    loadUsers();
  }, []); 

  return (
    <div className="w-full h-screen bg-gray-50 flex items-center justify-center px-4">
    <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-8 w-full max-w-screen-xl h-[90%] flex flex-col md:flex-row gap-8">
      {/* Formulário - 2/3 */}
      <div className="md:w-2/3 w-full flex flex-col justify-start">
        <div className="bg-gray-100 p-6 rounded-lg border border-dashed border-gray-300 h-full">
          <UserForm setUsers={setUsers} />
        </div>
      </div>

      {/* Lista - 1/3 */}
      <div className="md:w-1/3 w-full flex flex-col justify-start">
        <h2 className="text-2xl font-bold mb-4 text-right">Lista de Usuarios</h2>
        <div className="bg-gray-100 p-6 rounded-lg border border-dashed border-gray-300 text-right h-full">
         <UserList users={users} setUsers={setUsers} />
        </div>
      </div>
    </div>
  </div>
  )
}

export default ManagerUser