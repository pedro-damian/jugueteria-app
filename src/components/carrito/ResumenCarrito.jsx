import React from 'react';
import { Link } from 'react-router-dom';

function Resumen({ subtotal, descuentos, total }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-center font-bold mb-4">Resumen de Compra</h2>
      <div className="flex justify-between mb-2">
        <span className="text-sm font-semibold">Subtotal</span>
        <span className="text-sm">S/ {subtotal.toFixed(2)}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span className="text-sm font-semibold">Descuentos</span>
        <span className="text-sm">S/ {descuentos.toFixed(2)}</span>
      </div>
      <div className="flex justify-between font-bold border-t pt-2">
        <span>Total</span>
        <span>S/ {total.toFixed(2)}</span>
      </div>
      <Link
        to="/checkout"
        className="bg-green-500 text-white font-bold py-2 rounded-md mt-4 w-full block text-center hover:bg-green-600 transition-colors"
      >
        Comprar
      </Link>
      <Link
        to="/"
        className="text-sm text-gray-500 hover:text-gray-700 mt-2 w-full block text-center"
      >
        Volver a Inicio
      </Link>
    </div>
  );
}

export default Resumen;
