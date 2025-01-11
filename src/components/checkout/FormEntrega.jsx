const DeliveryForm = ({ formData, handleChange }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-4">Entrega de Producto</h2>
      <div className="bg-gray-100 p-4 rounded-md">
        <div className="flex items-center mb-4">
          <input
            type="radio"
            id="storePickup"
            name="deliveryMethod"
            value="storePickup"
            checked={formData.deliveryMethod === "storePickup"}
            onChange={handleChange}
            className="mr-2 focus:ring-green-500"
          />
          <label htmlFor="storePickup" className="text-gray-700 font-semibold">
            Retiro en Tienda
          </label>
        </div>

        {formData.deliveryMethod === "storePickup" && (
          <div className="ml-6">
            <p className="text-sm text-gray-700 mb-2">
              Puedes retirar los productos hasta después de 7 días
            </p>
            <p className="text-sm text-gray-700 mb-2">
              Ubicación: Av. Mundo Mágico 1234
            </p>
            <p className="text-sm text-gray-700 mb-2">
              Horario: Lunes a Domingo de 9:00 am a 10:00 pm
            </p>
            <img
              src="https://via.placeholder.com/300x150"
              alt="Mapa de la tienda"
              className="w-full h-32 object-cover rounded-md"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default DeliveryForm;
