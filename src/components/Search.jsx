import { FaSearch } from "react-icons/fa";
import ComponentMenu from "./ComponentMenu";

function SearchBar() {
  const brands = [
    {
      id: 1,
      name: "Mundo Mágico Logo",
      image: "/src/assets/logo.webp",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:space-x-6 space-y-4 md:space-y-0 p-4 bg-white shadow-md rounded-lg">
      {/* LOGO */}
      <img src={brands[0].image} alt={brands[0].name} className="h-16" />

      {/* BARRA DE BÚSQUEDA */}
      <div className="flex items-center bg-gray-100 px-4 py-2 rounded-lg w-full md:w-[600px]">
        <FaSearch className="text-gray-500" /> {/* Ícono de lupa */}
        <input
          type="text"
          placeholder="Buscar"
          className="ml-2 bg-transparent outline-none text-gray-700 w-full"
        />
      </div>

      {/* MENÚ */}
      <div>
        <ComponentMenu />
      </div>
    </div>
  );
}

export default SearchBar;
