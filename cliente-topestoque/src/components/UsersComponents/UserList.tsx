import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { deleteUser } from "../../state/UserService";
import toast from "react-hot-toast";
import { User } from "../../types";

interface UserListProps {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
}

const UserList: React.FC<UserListProps> = ({ users, setUsers }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const deleteUserById = async (id: string) => {
    try {
      await deleteUser(id);
      setUsers(prevUsers => prevUsers.filter(user => user.userId !== id));
      toast.success("User deleted");
    } catch (e) {
      console.error(e);
      toast.error("Error deleting user");
    }
  };

  return (
    <div className="h-full overflow-y-auto p-4">
      <div className="mb-4">
        <div className="flex items-center gap-2 w-full">
          <input
            type="text"
            name="keyword"
            id="keyword"
            placeholder="Pesquise por nome..."
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="button"
            className="p-2 bg-blue-400 hover:bg-blue-500 text-white rounded-md"
            aria-label="Buscar usuário"
          >
            <CiSearch size={20} />
          </button>
        </div>
      </div>

      <div className="space-y-8">
        {filteredUsers.map((user, index) => (
          <div key={index} className="p-6 bg-blue-400 rounded-md shadow">
            <div className="flex justify-between items-center">
              <div>
                <h5 className="text-lg font-semibold text-white">{user.name}</h5>
                <p className="text-white">{user.email}</p>
              </div>
              <button
                onClick={() => deleteUserById(user.userId)}
                className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
              >
                Deletar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
