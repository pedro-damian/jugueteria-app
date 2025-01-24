import { useNavigate } from "react-router-dom";
import { autenticacionUsuario } from "../../context/AuthContext";

function Salir() {
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
            onClick={() => navigate("/mi-cuenta")}
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
