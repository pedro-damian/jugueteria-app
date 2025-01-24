import React from "react";
import { Link } from "react-router-dom";

function ResumenCarrito({
  subtotal,
  descuentos,
  total,
  showCheckoutButton = true,
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Resumen de compra</h2>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>S/ {subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Descuentos</span>
          <span>- S/ {descuentos.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-bold border-t pt-2 mt-2">
          <span>Total</span>
          <span>S/ {total.toFixed(2)}</span>
        </div>
      </div>

      {showCheckoutButton && (
        <Link
          to="/checkout"
          className="w-full inline-block text-center bg-green-500 text-white font-semibold py-2 px-4 rounded mt-4
                         hover:bg-green-600 transition-colors no-underline"
        >
          Proceder al pago
        </Link>
      )}
    </div>
  );
}

export default ResumenCarrito;
