import { Link } from "react-router-dom";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useCart } from "../../context/CartContext";
import { useFavoritos } from "../../context/FavoritosContext"; // contexto de favoritos
import { useState } from "react";

function ProductCard({ product }) {
  const { addItem, cart } = useCart(); // Obtenemos las funciones del contexto
  const { toggleFavorite, isFavorite } = useFavoritos();
  const [isAdding, setIsAdding] = useState(false); // Estado para feedback visual

  const productIsFavorite = isFavorite(product.id);

  // Manejador para agregar al carrito
  const handleAddToCart = (e) => {
    e.preventDefault(); // Previene la navegación del Link
    setIsAdding(true);
    addItem(product);

    // Resetea el estado después de un momento
    setTimeout(() => {
      setIsAdding(false);
    }, 1000);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="flex flex-col h-min border rounded-lg shadow hover:shadow-lg transition-shadow no-underline bg-white"
    >
      {/* Contenedor de imagen con tamaño fijo */}
      <div className="w-full h-64 p-4 flex items-center justify-center">
        <img
          src={product.image}
          alt={`Imagen de ${product.name}`}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      {/* Contenedor de información del producto */}
      <div className="flex flex-col flex-grow p-4">
        <div className="flex-grow">
          <p className="text-gray-500 uppercase text-xs">{product.brand}</p>
          <h3 className="text-lg font-semibold mt-2 truncate">
            {product.name}
          </h3>
          <p className="text-gray-500 text-xs mt-1">Código: {product.id}</p>
        </div>

        {/* Precio y botón de favoritos */}
        <div className="flex items-center justify-between mt-4">
          <p className="text-green-600 font-bold">
            S/ {product.price.toFixed(2)}
          </p>
          <button
            onClick={(e) => {
              e.preventDefault();
              toggleFavorite(product);
            }}
            className={`text-gray-500 hover:text-red-500 flex items-center p-2 transition-colors ${
              productIsFavorite ? "text-red-500" : ""
            }`}
          >
            {productIsFavorite ? (
              <FaHeart size={20} />
            ) : (
              <FaRegHeart size={20} />
            )}
          </button>
        </div>

        {/* Botón de agregar al carrito */}
        <button
          onClick={handleAddToCart}
          disabled={isAdding}
          className={`w-full font-bold py-2 px-4 rounded transition-colors mt-4 ${
            isAdding
              ? "bg-green-700 text-white cursor-not-allowed"
              : "bg-green-500 hover:bg-green-600 text-white"
          }`}
        >
          {isAdding ? "Agregado!" : "Agregar al Carrito"}
        </button>
      </div>
    </Link>
  );
}

export default ProductCard;
