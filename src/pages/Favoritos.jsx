import React from "react";
import { useFavoritos } from "../context/FavoritosContext";
import { useCart } from "../context/CartContext";
import BannerCategoria from "../components/BannerCategoria";
import { FaTrash, FaShoppingCart } from "react-icons/fa";

function Favoritos() {
  const { favorites, toggleFavorite } = useFavoritos();
  const { addItem } = useCart();

  if (favorites.length === 0) {
    return (
      <>
        <BannerCategoria
          url_imagen="https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          nombreCategoria="Mis Favoritos"
        />
        <div className="container mx-auto px-4 py-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            No tienes favoritos guardados
          </h2>
          <p className="text-gray-600">
            ¡Agrega algunos productos a tus favoritos!
          </p>
        </div>
      </>
    );
  }

  return (
    <>
      <BannerCategoria
        url_imagen="https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        nombreCategoria="Mis Favoritos"
      />

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-contain mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-500 text-sm mb-2">{product.brand}</p>
                <p className="text-green-600 font-bold text-xl mb-4">
                  S/ {product.price.toFixed(2)}
                </p>

                <div className="flex gap-2">
                  <button
                    onClick={() => addItem(product)}
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition-colors flex items-center justify-center gap-2"
                  >
                    <FaShoppingCart />
                    Agregar al Carrito
                  </button>
                  <button
                    onClick={() => toggleFavorite(product)}
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition-colors"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Favoritos;
