import { Link } from "react-router-dom";
import { useState } from "react";
import { FaShoppingCart, FaRegHeart } from "react-icons/fa";
import { FiUser, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import BannerCotiza from "../common/BannerCotiza";
import { autenticacionUsuario } from "../../context/AuthContext";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { user, logout } = autenticacionUsuario(); // Obtén el usuario y la función logout del contexto

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const handleLogout = () => {
    logout();
    setIsUserMenuOpen(false);
  };

  return (
    <>
      {/* Banner superior verde */}
      <div className="hidden lg:block">
        <BannerCotiza />
      </div>

      <nav className="bg-white shadow-md relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link to="/" className="flex items-center">
              <span className="ml-2 text-xl font-bold text-primary">
                Mundo Mágico
              </span>
            </Link>

            {/* Enlaces de navegación para desktop */}
            <div className="hidden lg:flex items-center space-x-6 gap-4">
              <Link to="/" className="text-gray-700 hover:text-primary">
                Inicio
              </Link>
              <Link to="" className="text-gray-700 hover:text-primary">
                Juguetes
              </Link>
              <Link to="" className="text-gray-700 hover:text-primary">
                Nuestras Ofertas
              </Link>
            </div>

            {/* Iconos y botón de menú */}
            <div className="flex items-center space-x-4">
              {user ? (
                <div className="hidden lg:block relative">
                  <span className="text-gray-700">{user.email}</span>
                </div>
              ) : (
                <Link
                  to="/registro"
                  className="hidden lg:block text-gray-700 hover:text-primary"
                >
                  <span>Registrate</span>
                </Link>
              )}

              {/* Icono de usuario con menú desplegable */}
              <div className="relative">
                <button
                  onClick={toggleUserMenu}
                  className="text-gray-700 hover:text-primary focus:outline-none"
                >
                  <FiUser className="text-xl" />
                </button>


                {/* Menú desplegable del usuario: mi cuenta y cerrar sesion */}
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    {user ? (
                      <>
                        <Link
                          to=""
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => setIsUserMenuOpen(false)}
                        >
                          Mi Cuenta
                        </Link>
                        <button
                          onClick={handleLogout}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Cerrar Sesión
                        </button>
                      </>
                    ) : (
                      <Link to="/login" className="text-gray-700 hover:text-primary">
                        
                      </Link>
                    )}
                  </div>
                )}
              </div>


              <Link to="" className="text-gray-700 hover:text-primary">
                <FaRegHeart className="text-xl" />
              </Link>
              <Link to="" className="text-gray-700 hover:text-primary">
                <FiShoppingCart className="text-xl" />
              </Link>
              <button
                className="lg:hidden text-gray-700 hover:text-primary"
                onClick={toggleMenu}
              >
                {isMenuOpen ? (
                  <FiX className="text-2xl" />
                ) : (
                  <FiMenu className="text-2xl" />
                )}
              </button>
            </div>
          </div>

          {/* Menú móvil */}
          {isMenuOpen && (
            <div className="lg:hidden absolute top-16 left-0 right-0 bg-white shadow-md z-50">
              <div className="px-4 pt-2 pb-3 space-y-1">
                <Link
                  to="/"
                  className="block px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-50"
                >
                  Inicio
                </Link>
                <Link
                  to=""
                  className="block px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-50"
                >
                  Juguetes
                </Link>
                <Link
                  to=""
                  className="block px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-50"
                >
                  Nuestras Ofertas
                </Link>


                {user ? (
                  <>
                    <Link
                      to="/mi-cuenta"
                      className="block px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-50"
                    >
                      Mi Cuenta
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-50"
                    >
                      Cerrar Sesión
                    </button>
                  </>
                ) : (
                  <Link
                    to="/registro"
                    className="block px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-50"
                  >
                    Registrate
                  </Link>
                )}

              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
