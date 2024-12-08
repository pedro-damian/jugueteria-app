
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
    </div>
  );
}

export default Home;
