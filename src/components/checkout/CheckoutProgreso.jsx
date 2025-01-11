const CheckoutProgreso = ({ pasoActual }) => {
  const steps = [
    { id: 1, name: "Datos Personales" },
    { id: 2, name: "Entrega" },
    { id: 3, name: "Pago" },
  ];

  return (
    <div className="flex justify-between mb-8 px-2 sm:px-4 md:px-6">
      {steps.map((step) => (
        <div
          key={step.id}
          className={`flex-1 text-center py-2
                ${
                  pasoActual === step.id
                    ? "text-green-600 border-b-2 border-green-600"
                    : "text-gray-500"
                }
                text-xs sm:text-sm md:text-base lg:text-lg
                font-semibold
                mx-1 sm:mx-2 md:mx-4
                transition-all duration-300
              `}
        >
          {/* Texto para móviles */}
          <span className="block sm:hidden">{step.shortName}</span>
          {/* Texto para tablets y desktop */}
          <span className="hidden sm:block">{step.name}</span>
        </div>
      ))}
    </div>
  );
};

export default CheckoutProgreso;
