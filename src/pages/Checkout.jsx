import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // 1: Datos Personales, 2: Entrega, 3: Pago
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    lastname: "",
    dni: "",
    phone: "",
    deliveryMethod: "storePickup",
    paymentMethod: "creditCard",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Aquí iría la lógica para procesar el pago
    // y guardar la información del pedido
    console.log("Datos del formulario:", formData);
    // Simulación de procesamiento de pago
    await new Promise((resolve) => setTimeout(resolve, 1000));
    navigate("/order-confirmation");
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold mb-4">Datos Personales</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Correo:
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  placeholder="Ingresa tu correo"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Nombre:
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  placeholder="Ingresa tu nombre"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Apellidos:
                </label>
                <input
                  type="text"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  placeholder="Ingresa tu apellido"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Documento de Identidad:
                </label>
                <input
                  type="text"
                  name="dni"
                  value={formData.dni}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  placeholder="Ingresa tu DNI"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Teléfono:
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  placeholder="Ingresa tu teléfono"
                  required
                />
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold mb-4">Entrega de Producto</h2>
            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="font-semibold mb-2">Retiro en Tienda</h3>
              <p className="text-sm text-gray-700 mb-2">
                Puedes Retirar los productos hasta despues de 7 dias
              </p>
              <p className="text-sm text-gray-700 mb-2">
                Ubicacion: Av. Mundo Magico 1234
              </p>
              <img
                src="https://via.placeholder.com/300x150"
                alt="Mapa de la tienda"
                className="w-full h-32 object-cover rounded-md"
              />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold mb-4">Finaliza tu Compra</h2>
            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="font-semibold mb-2">Pago</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="creditCard"
                    name="paymentMethod"
                    value="creditCard"
                    checked={formData.paymentMethod === "creditCard"}
                    onChange={handleChange}
                    className="mr-2 focus:ring-green-500"
                  />
                  <label htmlFor="creditCard" className="text-gray-700">
                    Tarjeta Debito
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="culqi"
                    name="paymentMethod"
                    value="culqi"
                    checked={formData.paymentMethod === "culqi"}
                    onChange={handleChange}
                    className="mr-2 focus:ring-green-500"
                  />
                  <label htmlFor="culqi" className="text-gray-700">
                    Culqi
                  </label>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Barra de progreso */}
      <div className="flex justify-between mb-8">
        <div
          className={`flex-1 text-center py-2 font-semibold ${
            step === 1 ? "text-green-600 border-b-2 border-green-600" : "text-gray-500"
          }`}
        >
          Datos Personales
        </div>
        <div
          className={`flex-1 text-center py-2 font-semibold ${
            step === 2 ? "text-green-600 border-b-2 border-green-600" : "text-gray-500"
          }`}
        >
          Entrega
        </div>
        <div
          className={`flex-1 text-center py-2 font-semibold ${
            step === 3 ? "text-green-600 border-b-2 border-green-600" : "text-gray-500"
          }`}
        >
          Pago
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-2/3 bg-white rounded-lg shadow-md p-6">
          {renderStepContent()}
        </div>

        <div className="w-full md:w-1/3">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold mb-4">Resumen de Compra</h2>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>S/ 61.80</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Descuentos</span>
              <span>S/ 0.0</span>
            </div>
            <div className="flex justify-between font-bold border-t pt-2">
              <span>Total</span>
              <span>S/ 61.80</span>
            </div>
          </div>
        </div>
      </div>

      {/* Botones de navegación */}
      <div className="mt-8 flex justify-between">
        {step > 1 && (
          <button
            onClick={handlePreviousStep}
            className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            ← Volver Atrás
          </button>
        )}
        {step < 3 ? (
          <button
            onClick={handleNextStep}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Ir a Recojo →
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Pagar Ahora →
          </button>
        )}
      </div>
    </div>
  );
}

export default Checkout;
