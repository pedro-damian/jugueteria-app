import { Link } from "react-router-dom";

function Registro() {
  return (
    // Contenedor principal con flex y min-height para centrado vertical
    <div className=" flex items-center justify-center bg-gray-100 px-4 py-12 sm:px-6 lg:px-8">
      {/* Contenedor del formulario con ancho máximo responsivo */}
      <div className="w-full max-w-md space-y-8">
        {/* Encabezado */}
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Crear cuenta
          </h2>
        </div>

        {/* Contenedor del formulario con fondo blanco */}
        <div className="bg-white rounded-lg shadow px-6 py-8 sm:px-8">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                Nombre:
              </label>
              <div className="mt-1">
                <input
                  placeholder="ingresa tu nombre"
                  id="firstName"
                  name="firstName"
                  type="text"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                Apellido:
              </label>
              <div className="mt-1">
                <input
                  placeholder="ingresa tu apellido"
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Correo electrónico:
              </label>
              <div className="mt-1">
                <input
                  placeholder="ingresa tu correo"
                  id="email"
                  name="email"
                  type="email"
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
                Contraseña:
              </label>
              <div className="mt-1">
                <input
                  placeholder="crea tu contraseña"
                  id="password"
                  name="password"
                  type="password"
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
                Registrarse
              </button>
            </div>
          </form>

          {/* Enlace para iniciar sesión */}
          <div className="mt-6">
            <div className="relative">
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  ¿Ya tienes una cuenta?{" "}
                  <Link
                    to="/login"
                    className="font-medium text-green-600 hover:text-green-500 transition-colors duration-200"
                  >
                    Iniciar sesión
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

export default Registro;
