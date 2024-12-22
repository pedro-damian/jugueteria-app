import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import { FiUser, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";

function ComponentMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      <div className="flex items-center space-x-6 font-bold">
        <Link
          to="/registro"
          className="hidden lg:block text-gray-700 hover:text-primary"
        >
          <span>Registrate</span>
        </Link>
        <Link to="/login" className="text-gray-700 hover:text-primary ">
          <FiUser className="text-xl" />
        </Link>
        <Link to="" className="text-gray-700 hover:text-primary">
          <FaRegHeart className="text-xl" />
        </Link>
        <Link to="" className="text-gray-700 hover:text-primary">
          <FiShoppingCart className="text-xl" />
        </Link>
        <button
          className="lg:hidden text-black hover:text-primary"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <FiX className="text-2xl" />
          ) : (
            <FiMenu className="text-2xl" />
          )}
        </button>
      </div>
      {/* Menú móvil */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 right-0 bg-white shadow-md z-50">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-50"
              onClick={closeMenu}
            >
              Inicio
            </Link>
            <Link
              to=""
              className="block px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-50"
              onClick={closeMenu}
            >
              Juguetes
            </Link>
            <Link
              to=""
              className="block px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-50"
              onClick={closeMenu}
            >
              Nuestras Ofertas
            </Link>
            <Link
              to=""
              className="block px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-50"
              onClick={closeMenu}
            >
              Contactanos
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default ComponentMenu;
