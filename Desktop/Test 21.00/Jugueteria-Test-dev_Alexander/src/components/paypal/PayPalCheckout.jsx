// src/components/paypal/PayPalCheckout.jsx *//

{/* logica de Renderizar botones de PayPal si se selecciona PayPal + package paypal que es = npm i @paypal/react-paypal-js
  */}

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";





const PayPalCheckout = ({ subtotal, onPaymentSuccess }) => {
  return (
    <PayPalScriptProvider options={{ "client-id": "ARyzQxkWPqGfWPHVkRGvySjJZtzMcJyvtrv6WvNtacCACqvO9TUVSsOTQS1nqVkVP__rwueRRVcR0pbA" }}>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100px" }}>
        <PayPalButtons
          style={{ layout: "vertical" }}
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: subtotal.toFixed(2), // Monto a pagar
                  },
                },
              ],
            });
          }}
          onApprove={(data, actions) => {
            return actions.order.capture().then((details) => {
              onPaymentSuccess(details); // Notificar que el pago fue exitoso
            });
          }}
          onError={(err) => {
            console.error("Error en PayPal:", err);
          }}
        />
      </div>
    </PayPalScriptProvider>
  );


   
};


export default PayPalCheckout;
