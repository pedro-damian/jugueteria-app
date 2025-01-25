import { useNavigate } from "react-router-dom";
import { useCheckout } from "../hooks/useCheckout";
import CheckoutProgress from "../components/checkout/CheckoutProgreso";
import PersonalDataForm from "../components/checkout/DatosPersonales";
import DeliveryForm from "../components/checkout/FormEntrega";
import OrderSummary from "../components/carrito/ResumenCarrito";
import NavigationButtons from "../components/checkout/BotonesNavegacion";
import BannerCheckout from "../components/checkout/BannerCheckout";
import { useCart } from "../context/CartContext";
import { useEffect, useState } from "react";
/*Importatne descargarse los packetes de paypal =  npm i @paypal/react-paypal-js*/
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

function Checkout() {
  const navigate = useNavigate();
  const { cart, subtotal } = useCart();
  const [productDetails, setProductDetails] = useState([]);
  const {
    step,
    formData,
    errors,
    isLoading,
    handleChange,
    handleNextStep,
    handlePreviousStep,
  } = useCheckout();
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isPayPal, setIsPayPal] = useState(false); // Modo de pago seleccionado

  // Validación para carrito vacío
  if (!cart || cart.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold mb-4">El carrito está vacío</h2>
        <button
          onClick={() => navigate("/product-catalog")}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Ir a Catálogo de Productos
        </button>
      </div>
    );
  }

  // Función para obtener los productos del carrito
  const fetchProducts = async () => {
    try {
      const productResponses = await Promise.all(
        cart.map((product) =>
          fetch(`http://localhost:8080/api/productos/${product.id}`),
        ),
      );

      const productData = await Promise.all(
        productResponses.map(async (res) => {
          if (res.ok) {
            return await res.json();
          } else {
            throw new Error(`Producto no encontrado: ${res.status}`);
          }
        }),
      );

      setProductDetails(productData);
    } catch (error) {
      console.error("Error al cargar los productos:", error);
    }
  };

  useEffect(() => {
    fetchProducts(); // Cargar los productos al iniciar
  }, [cart]);

  // Función para obtener el clientSecret del backend
  const fetchClientSecret = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/api/create-payment-intent",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount: subtotal * 100, // Monto en centavos
            productId: cart.map((product) => product.id),
          }),
        },
      );

      const data = await response.json();
      setClientSecret(data.clientSecret);
    } catch (error) {
      console.error("Error al obtener el clientSecret:", error);
    }
  };

  useEffect(() => {
    if (subtotal > 0) {
      fetchClientSecret(); // Obtener clientSecret cuando hay productos en el carrito
    }
  }, [subtotal]);

  // Función para manejar el submit del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (step === 3) {
      if (isPayPal) {
        // PayPal maneja su propio flujo de pago
        return;
      }

      if (!stripe || !elements || !clientSecret) {
        return;
      }

      setIsProcessing(true);

      const payload = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      if (payload.error) {
        console.error("Error en el pago:", payload.error.message);
      } else {
        if (payload.paymentIntent.status === "succeeded") {
          navigate("/confirmacion-orden");
        }
      }

      setIsProcessing(false);
    } else {
      handleNextStep();
    }
  };

  // Renderizar el contenido de acuerdo con el paso actual
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
        return (
          <DeliveryForm
            formData={formData}
            handleChange={handleChange}
            errors={errors}
          />
        );
      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-xl text-center font-semibold mb-4">
              Finalizar Compra
            </h2>
            <div className="mb-6">
              <label className="flex items-center space-x-3 mb-4">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="card"
                  checked={!isPayPal}
                  onChange={() => setIsPayPal(false)}
                />
                <span>Pago con tarjeta</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="paypal"
                  checked={isPayPal}
                  onChange={() => setIsPayPal(true)}
                />
                <span>PayPal</span>
              </label>
            </div>
            {isPayPal ? (
              <PayPalScriptProvider
                options={{ "client-id": "YOUR_PAYPAL_CLIENT_ID" }}
              >
                <PayPalButtons
                  createOrder={(data, actions) => {
                    return actions.order.create({
                      purchase_units: [
                        {
                          amount: {
                            value: subtotal.toFixed(2),
                          },
                        },
                      ],
                    });
                  }}
                  onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => {
                      console.log("Pago exitoso:", details);
                      navigate("/confirmacion-orden");
                    });
                  }}
                  onError={(err) => {
                    console.error("Error en PayPal:", err);
                  }}
                />
              </PayPalScriptProvider>
            ) : (
              <CardElement
                className="p-4 border rounded-md shadow-sm focus:ring-2 focus:ring-green-500"
                options={{
                  style: {
                    base: {
                      fontSize: "16px",
                      color: "#424770",
                      "::placeholder": {
                        color: "#aab7c4",
                      },
                    },
                    invalid: {
                      color: "#9e2146",
                    },
                  },
                }}
              />
            )}
            {!isPayPal && (
              <button
                disabled={isProcessing || !stripe || !elements}
                type="submit"
                className={`w-full py-3 px-4 rounded-md text-white font-medium text-lg transition-colors duration-200
                  ${
                    isProcessing
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-green-500 hover:bg-green-600 active:bg-green-700"
                  }
                  disabled:opacity-50 disabled:cursor-not-allowed
                  shadow-sm hover:shadow-md
                  flex justify-center items-center gap-2`}
              >
                {isProcessing ? "Procesando..." : `Pagar S/. ${subtotal.toFixed(2)}`}
              </button>
            )}
          </div>
        );
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
            <form onSubmit={handleSubmit}>{renderStepContent()}</form>
          </div>

          <div className="w-full md:w-1/3">
            <OrderSummary
              subtotal={subtotal}
              descuentos={0}
              total={subtotal}
              showCheckoutButton={false}
            />
          </div>
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
