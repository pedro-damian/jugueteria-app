import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  //FUNCION QUE NO PERMITE RENDERIZAR EN DISPOSITIVOS MENORES
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!isLargeScreen) {
    return null;
  }

  return (
    <nav className="bg-white shadow-md relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center h-16 items-center">
          <div className="flex items-center space-x-6">
            <Link to="/" className="text-black font-bold hover:text-primary">
              Inicio
            </Link>
            <Link to="" className="text-black font-bold hover:text-primary">
              Juguetes
            </Link>
            <Link to="" className="text-black font-bold hover:text-primary">
              Nuestras Ofertas
            </Link>
            <Link to="" className="text-black font-bold hover:text-primary">
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
