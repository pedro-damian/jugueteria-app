import { createContext, useContext, useState } from "react";

const CheckoutContext = createContext();

export function CheckoutProvider({ children }) {
  const [checkoutData, setCheckoutData] = useState({
    shippingAddress: null,
    paymentMethod: null,
    discount: 0,
  });

  const value = {
    checkoutData,
    setShippingAddress: (address) =>
      setCheckoutData((prev) => ({ ...prev, shippingAddress: address })),
    setPaymentMethod: (method) =>
      setCheckoutData((prev) => ({ ...prev, paymentMethod: method })),
    // Más funciones según necesites...
  };

  return (
    <CheckoutContext.Provider value={value}>
      {children}
    </CheckoutContext.Provider>
  );
}
export const useCheckout = () => useContext(CheckoutContext);
