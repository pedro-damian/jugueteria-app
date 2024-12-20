import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { autenticacionUsuario } from "../context/AuthContext";

function Login() {

  const navigate = useNavigate();
  const { login } = autenticacionUsuario();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch('URL_API/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const data = await response.json();
        // Guardar el token y la información del usuario
        login(data);
        navigate('/'); // Redirige al home
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Error al iniciar sesión');
      }
    } catch (error) {
      setError('Error de conexión');
    }
  };


  return (
    // Contenedor principal
    <div className=" flex items-center justify-center bg-gray-100 px-4 py-12 sm:px-6 lg:px-8">
      {/* Contenedor del formularioresponsivo */}
      <div className="w-full max-w-md space-y-8">
        {/* Encabezado */}
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Iniciar sesión
          </h2>
        </div>

        {/* Contenedor del formulario con fondo blanco */}
        <div className="bg-white rounded-lg shadow px-6 py-8 sm:px-8">

          {error && (
            <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">
              {error}
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Correo electrónico
              </label>
              <div className="mt-1">
                <input
                  placeholder="ingresa tu correo"
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Contraseña
              </label>
              <div className="mt-1">
                <input
                  placeholder="ingresa tu contraseña"
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200"
              >
                Iniciar sesión
              </button>
            </div>
          </form>

          {/* Enlace para iniciar sesión */}
          <div className="mt-6">
            <div className="relative">
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  ¿No tienes una cuenta?{" "}
                  <Link
                    to="/registro"
                    className="font-medium text-green-600 hover:text-green-500 transition-colors duration-200"
                  >
                    Registrate
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
