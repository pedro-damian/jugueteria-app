import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../data/products'; // Asegúrate de que la ruta sea correcta

function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div className="p-4">Producto no encontrado.</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row -mx-4">
        <div className="md:flex-1 px-4">
          <img
            src={product.image}
            alt={`Imagen de ${product.name}`}
            className="w-full rounded-lg mb-4"
          />
        </div>
        <div className="md:flex-1 px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h2>
          <p className="text-gray-600 text-sm mb-4">{product.brand}</p>
          <div className="flex mb-4">
            <span className="font-bold text-gray-700">Precio:</span>
            <span className="text-gray-600 ml-2">S/ {product.price.toFixed(2)}</span>
          </div>
          <p className="text-gray-500 text-sm">Código: {product.code}</p>
          <div className="mt-6">
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
              Agregar al Carrito
            </button>
            <button className="ml-2 text-gray-600 hover:text-red-500 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5 mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              Agregar a Favoritos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
