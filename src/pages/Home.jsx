import { Link } from "react-router-dom";
import Hero from "../components/layout/Hero";
import BrandSection from "../components/layout/BrandSection";
import CategoriasDestacadas from "../components/layout/CategoriasDestacadas";

function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* seccion Hero */}
      <Hero />

      {/* Categorías Destacadas */}
      <CategoriasDestacadas />

      {/* Marcas de los juguetes */}
      <BrandSection />

      {/* Agrega un enlace a produc-catalog */}
      <div className="mt-8 text-center">
        <Link
          to="/product-catalog"
          className="text-blue-500 hover:text-blue-700 font-semibold"
        >
          Ver catálogo de juguetes
        </Link>
      </div>
    </div>
  );
}

export default Home;

