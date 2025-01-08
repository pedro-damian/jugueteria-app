import { Link } from "react-router-dom";
import { useState } from "react";
import { FaShoppingCart, FaRegHeart } from "react-icons/fa";
import { FiUser, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import BannerCotiza from "../common/BannerCotiza";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
              <Link
                to="/registro"
                className="hidden lg:block text-gray-700 hover:text-primary"
              >
                <span>Registrate</span>
              </Link>
              <Link to="/login" className="text-gray-700 hover:text-primary">
                <FiUser className="text-xl" />
              </Link>
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
                <Link
                  to="/registro"
                  className="block px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-50"
                >
                  Registrate
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
