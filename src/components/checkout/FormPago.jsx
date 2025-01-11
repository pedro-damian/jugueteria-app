const PaymentForm = ({ formData, handleChange, errors }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-4">Finaliza tu Compra</h2>
      <div className="bg-gray-100 p-4 rounded-md">
        <h3 className="font-semibold mb-4">Método de Pago</h3>

        <div className="space-y-4">
          <div className="flex items-center p-3 border rounded-md bg-white">
            <input
              type="radio"
              id="creditCard"
              name="paymentMethod"
              value="creditCard"
              checked={formData.paymentMethod === "creditCard"}
              onChange={handleChange}
              className="mr-3 focus:ring-green-500"
            />
            <label htmlFor="creditCard" className="flex items-center flex-1">
              <span className="text-gray-700 font-medium">
                Tarjeta de Débito/Crédito
              </span>
              <div className="ml-auto flex space-x-2">
                <img src="/visa.svg" alt="Visa" className="h-6" />
                <img src="/mastercard.svg" alt="Mastercard" className="h-6" />
              </div>
            </label>
          </div>

          <div className="flex items-center p-3 border rounded-md bg-white">
            <input
              type="radio"
              id="culqi"
              name="paymentMethod"
              value="culqi"
              checked={formData.paymentMethod === "culqi"}
              onChange={handleChange}
              className="mr-3 focus:ring-green-500"
            />
            <label htmlFor="culqi" className="flex items-center flex-1">
              <span className="text-gray-700 font-medium">Culqi</span>
              <img src="/culqi.svg" alt="Culqi" className="h-6 ml-auto" />
            </label>
          </div>
        </div>

        {errors.payment && (
          <p className="mt-2 text-red-600 text-sm">{errors.payment}</p>
        )}
      </div>
    </div>
  );
};

export default PaymentForm;
