// src/pages/ProductDetail.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <p className="text-center text-red-500">Producto no encontrado.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={product.image}
          alt={`Imagen de ${product.name}`}
          className="w-full md:w-1/2 rounded-lg"
        />
        <div className="flex-1">
          <p className="text-gray-500 uppercase text-sm">{product.brand}</p>
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="text-gray-500 mt-2">Código: {product.code}</p>
          <p className="text-green-600 text-xl font-bold mt-4">S/ {product.price.toFixed(2)}</p>

          <div className="mt-4 flex items-center gap-4">
            <button className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">
              AGREGAR
            </button>
            <button className="flex items-center text-gray-500 hover:text-red-600">
              <span>Agregar a Favoritos</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 ml-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5.121 19.803a1.41 1.41 0 00.878 1.203c.377.166.802.158 1.18-.023l4.182-2.304a1.414 1.414 0 011.268 0l4.182 2.304c.378.181.803.189 1.18.023a1.41 1.41 0 00.878-1.203l.636-5.54a1.413 1.413 0 01.42-1.013l4.013-3.93a1.413 1.413 0 00.328-1.412 1.41 1.41 0 00-1.278-.947h-5.508a1.414 1.414 0 01-1.247-.736L12 3.573a1.41 1.41 0 00-1.246-.736H5.246c-.566 0-1.087.338-1.277.947a1.41 1.41 0 00.328 1.412l4.013 3.93c.262.257.416.618.42 1.013l.636 5.54z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
