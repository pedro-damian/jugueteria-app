import React from 'react';
import { FaTrash } from 'react-icons/fa';

function Producto({ producto }) {
  return (
    <div className="flex items-center border rounded-lg p-4">
      <img
        src={producto.imagen}
        alt={producto.nombre}
        className="w-16 h-16 object-cover mr-4"
      />
      <div className="flex-grow">
        <p className="text-xs font-semibold">{producto.marca}</p>
        <p className="text-sm font-bold">{producto.nombre}</p>
        <div className="flex items-center gap-4 mt-2">
          <p className="text-xs">S/ {producto.precio.toFixed(2)}</p>
          <div className="flex items-center">
            <button className="bg-gray-200 px-1 rounded-md">-</button>
            <span className="text-xs mx-2">{producto.cantidad}</span>
            <button className="bg-gray-200 px-1 rounded-md">+</button>
          </div>
          <p className="text-xs font-bold">
            S/ {(producto.precio * producto.cantidad).toFixed(2)}
          </p>
        </div>
      </div>
      <button className="text-gray-500 hover:text-red-500">
        <FaTrash />
      </button>
    </div>
  );
}

export default Producto;
