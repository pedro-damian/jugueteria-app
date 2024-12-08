import { Link } from "react-router-dom";
import { FaShoppingCart, FaRegHeart } from "react-icons/fa";
import { FiUser, FiShoppingCart } from "react-icons/fi";
import BannerCotiza from "../common/BannerCotiza";

function Navbar() {
  return (
    <>
      {/* Banner superior verde */}
      <BannerCotiza />

      <nav className="bg-white shadow-md ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex justify-between h-16 items-center">
            <Link to="/" className="flex items-center">
              {/* <img src="/logo.png" alt="Mundo Mágico" className="h-8" /> */}
              <span className="ml-2 text-xl font-bold text-primary">
                Mundo Mágico
              </span>
            </Link>

            {/* Enlaces de navegación */}
            <div className="flex items-center space-x-6 gap-6">
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

            <div className="flex items-center space-x-4">
              <Link to="/registro" className="text-gray-700 hover:text-primary">
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
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
