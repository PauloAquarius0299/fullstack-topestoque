import { JSX, useContext, useState, ChangeEvent, FormEvent } from "react";
import toast from "react-hot-toast";
import { login } from "../../state/AuthService";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { LoginData } from "../../types";

function Login(): JSX.Element {
  const context = useContext(AppContext);

  // Garantir que o contexto não seja undefined
  if (!context) {
    throw new Error("AppContext deve ser usado dentro de AppContextProvider");
  }

  const { setAuthData } = context;
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<LoginData>({
    email: "" as LoginData["email"],
    password: "" as LoginData["password"],
  });

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onSubmitHandler = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await login(data); 
      toast.success("Login realizado com sucesso!");
      localStorage.setItem("token", response.token);
      localStorage.setItem("role", response.role);
      setAuthData(response.token, response.role);
      navigate("/");
    } catch (error) {
      toast.error("Email/senha inválidos");
      console.error("Erro no login:", error);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="login-background bg-transparent flex items-center justify-center min-h-screen">
      <div className="card w-full max-w-[400px]">
        <div className="card-body">
          <div className="text-center mb-4">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Login</h1>
            <p className="text-gray-600">Login de acesso</p>
          </div>
          <div className="mb-4">
            <form onSubmit={onSubmitHandler}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={onChangeHandler}
                  value={data.email}
                  placeholder="Digite seu email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                  Senha
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={onChangeHandler}
                  value={data.password}
                  placeholder="Digite sua senha"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  disabled={loading}
                  className="button-primary w-full py-2 px-4 rounded-md text-white font-medium mt-4 disabled:opacity-50"
                >
                  {loading ? "Carregando..." : "Entrar"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
