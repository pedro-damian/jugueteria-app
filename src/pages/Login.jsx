import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { autenticacionUsuario } from "../context/AuthContext";
import { loginUser } from "../api/Autenticacion";

// Componente reutilizable para un campo de entrada
function InputField({ id, label, type, value, onChange, placeholder }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1">
        <input
          id={id}
          name={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required
          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500"
        />
      </div>
    </div>
  );
}

// Componente principal de login
function Login() {
  const navigate = useNavigate();
  const { login } = autenticacionUsuario();
  const [formData, setFormData] = useState({ username: "", password: "" }); // Mantener 'username'
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const userData = await loginUser(formData); // Llamada al API para obtener los datos del usuario
      if (!userData.token) throw new Error("No se recibió el token de autenticación");

      // Almacenar el token, username y userId en el localStorage
      if (userData.token) {
        localStorage.setItem("token", userData.token); // Almacenar el token
        localStorage.setItem("username", userData.username); // Almacenar el username
        localStorage.setItem("userId", userData.userId); // Almacenar el userId
      }

      // Llamada a la función login para manejar el estado global (contexto)
      login({
        token: userData.token,
        username: userData.username,
        userId: userData.userId, // Añadimos el userId al estado global
      });

      navigate("/"); // Redirigir a la página principal después de login exitoso
    } catch (error) {
      console.error("Error en login:", error);
      setError(error.message || "Error al iniciar sesión");
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <h2 className="text-center text-2xl font-bold text-gray-900">Iniciar sesión</h2>
        <div className="bg-white rounded-lg shadow px-6 py-8 sm:px-8">
          {error && <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">{error}</div>}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <InputField
              id="username" // Cambié 'email' por 'username'
              label="Nombre de Usuario:"
              type="text" // Cambié 'username' por 'text' en el tipo
              placeholder="Ingresa tu nombre de usuario"
              value={formData.username} // Usando 'username'
              onChange={handleChange}
            />
            <InputField
              id="password"
              label="Contraseña"
              type="password"
              placeholder="Ingresa tu contraseña"
              value={formData.password}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors duration-200"
            >
              Iniciar sesión
            </button>
          </form>

          <div className="mt-6 text-center">
            <span className="text-gray-500">
              ¿No tienes una cuenta?{" "}
              <Link
                to="/registro"
                className="text-green-600 hover:text-green-500 transition-colors duration-200"
              >
                Regístrate
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
