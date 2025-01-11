import { useCheckoutContext } from "../../context/CheckoutContext";

const ResumenCompra = () => {
  const { state } = useCheckoutContext();
  const { cart, subtotal, discount, total } = state;

  return (
    <div className="w-full md:w-1/3">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold mb-4">Resumen de Compra</h2>

        {/* Lista de productos */}
        <div className="space-y-3 mb-4">
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between text-sm">
              <span>
                {item.name} x{item.quantity}
              </span>
              <span>S/ {item.price * item.quantity}</span>
            </div>
          ))}
        </div>

        {/* Formulario Subtotal y descuentos */}
        <div className="border-t pt-4 space-y-2">
          {/* Subtotal */}
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>S/ {subtotal.toFixed(2)}</span>
          </div>

          {/* Descuentos */}
          <div className="flex justify-between text-gray-600">
            <span>Descuentos</span>
            <span> - S/ {discount.toFixed(2)}</span>
          </div>

          {/* Total */}
          <div className="flex justify-between font-bold border-t pt-2">
            <span>Total</span>
            <span>S/ {total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumenCompra;
