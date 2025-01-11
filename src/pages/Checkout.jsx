import { useNavigate } from "react-router-dom";
import { useCheckout } from "../hooks/useCheckout";
import CheckoutProgress from "../components/checkout/CheckoutProgreso";
import PersonalDataForm from "../components/checkout/DatosPersonales";
import DeliveryForm from "../components/checkout/FormEntrega";
import PaymentForm from "../components/checkout/FormPago";
import OrderSummary from "../components/checkout/ResumenCompra";
import NavigationButtons from "../components/checkout/BotonesNavegacion";
import BannerCheckout from "../components/checkout/BannerCheckout";

function Checkout() {
  const navigate = useNavigate();
  const {
    step,
    formData,
    errors,
    isLoading,
    handleChange,
    handleNextStep,
    handlePreviousStep,
    processPayment,
  } = useCheckout();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (await processPayment()) {
      navigate("/order-confirmacion");
    }
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <PersonalDataForm
            formData={formData}
            handleChange={handleChange}
            errors={errors}
          />
        );
      case 2:
        return <DeliveryForm formData={formData} handleChange={handleChange} />;
      case 3:
        return <PaymentForm formData={formData} handleChange={handleChange} />;
      default:
        return null;
    }
  };

  return (
    <>
      <BannerCheckout />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <CheckoutProgress pasoActual={step} />

        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-2/3 bg-white rounded-lg shadow-md p-6">
            {renderStepContent()}
          </div>

          <OrderSummary />
        </div>

        <NavigationButtons
          step={step}
          isLoading={isLoading}
          onPrevious={handlePreviousStep}
          onNext={handleNextStep}
          onSubmit={handleSubmit}
        />
      </div>
    </>
  );
}

export default Checkout;
