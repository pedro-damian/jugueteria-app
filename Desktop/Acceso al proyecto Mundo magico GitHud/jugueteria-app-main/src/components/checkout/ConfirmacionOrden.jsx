import { Link } from "react-router-dom";

function ConfirmacionOrden() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-center">
      <h1 className="text-3xl font-bold text-green-600 mb-4">
        ¡Pedido Confirmado!
      </h1>
      <p className="text-gray-700 mb-4">
        Tu pedido ha sido procesado con éxito.
      </p>
      <p className="text-gray-700 mb-4">
        Recibirás un correo electrónico con los detalles de tu pedido.
      </p>
      <div className="mt-8">
        <Link
          to="/"
          className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition-colors"
        >
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
}

export default ConfirmacionOrden;
