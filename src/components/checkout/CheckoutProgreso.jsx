const CheckoutProgreso = ({ currentStep }) => {
  const steps = [
    { id: 1, name: "Datos Personales" },
    { id: 2, name: "Entrega" },
    { id: 3, name: "Pago" },
  ];

  return (
    <div className="flex justify-between mb-8">
      {steps.map((step) => (
        <div
          key={step.id}
          className={`flex-1 text-center py-2 font-semibold ${
            currentStep === step.id
              ? "text-green-600 border-b-2 border-green-600"
              : "text-gray-500"
          }`}
        >
          {step.name}
        </div>
      ))}
    </div>
  );
};

export default CheckoutProgreso;
