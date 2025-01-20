import { useNavigate } from "react-router-dom";  // Importa useNavigate desde react-router-dom para manejar la navegación programática en React. Este hook te permite redirigir a los usuarios a diferentes rutas dentro de tu aplicación. En este caso, se utiliza para redirigir al usuario a la página principal ("/") después de cerrar sesión. Es una forma de asegurarse de que el usuario no pueda volver a la página de inicio de sesión simplemente presionando el botón de retroceso del navegador. Es una buena práctica de seguridad para evitar que los usuarios accedan a áreas restringidas sin autenticación.
import { autenticacionUsuario } from "../../context/AuthContext";

function Salir() {
  // Utiliza el hook useNavigate para obtener la función de navegación. Esta función te permitirá redirigir al usuario a diferentes rutas dentro de tu aplicación. En este caso, se utiliza para redirigir al usuario a la página principal ("/") después de cerrar sesión.
  const navigate = useNavigate();
  const { logout } = autenticacionUsuario();

  const handleLogout = () => {
    const confirmar = window.confirm("¿Estás seguro que deseas cerrar sesión?");

    if (confirmar) {
      logout();
      navigate("/");
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="text-center max-w-md mx-auto">
        <div className="mb-6">
          <img
            src="cerrar-sesion2.png"
            alt="Cerrar sesión"
            className="w-24 h-24 mx-auto mb-4"
          />
          <p className="text-gray-600 mb-4">
            ¿Estás seguro que deseas cerrar tu sesión?
          </p>
        </div>

        <div className="space-y-4">
          <button
            onClick={handleLogout}
            className="w-full bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Cerrar Sesión
          </button>

          <button
            onClick={() => navigate("/")}
            className="w-full bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Salir;
