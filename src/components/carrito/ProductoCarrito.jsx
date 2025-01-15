import React from "react";
import { FaTrash } from "react-icons/fa";

function ProductoCarrito({ producto, onRemove, onUpdateQuantity }) {
  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    if (newQuantity > 0) {
      onUpdateQuantity(newQuantity);
    }
  };

  return (
    <div className="flex items-center bg-white p-4 rounded-lg shadow">
      <img
        src={producto.image}
        alt={producto.name}
        className="w-24 h-24 object-cover rounded"
      />
      <div className="flex-grow ml-4">
        <h3 className="font-semibold">{producto.name}</h3>
        <p className="text-gray-600 text-sm">{producto.brand}</p>
        <div className="flex items-center mt-2">
          <input
            type="number"
            min="1"
            value={producto.quantity}
            onChange={handleQuantityChange}
            className="w-16 border rounded px-2 py-1"
          />
          <button
            onClick={onRemove}
            className="ml-4 text-red-500 hover:text-red-700"
          >
            Eliminar
          </button>
        </div>
      </div>
      <div className="text-right">
        <p className="font-semibold">
          S/ {(producto.price * producto.quantity).toFixed(2)}
        </p>
      </div>
    </div>
  );
}

export default ProductoCarrito;
