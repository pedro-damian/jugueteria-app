import { useState } from "react";
import { validateEmail, validatePhone } from "../utils/validadores";

export const useCheckout = () => {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    lastname: "",
    dni: "",
    phone: "",
    deliveryMethod: "storePickup",
    paymentMethod: "creditCard",
  });

  const validateStep = (stepNumber) => {
    const newErrors = {};

    switch (stepNumber) {
      case 1:
        if (!validateEmail(formData.email)) {
          newErrors.email = "Email inválido";
        }
        if (!validatePhone(formData.phone)) {
          newErrors.phone = "Teléfono inválido";
        }
        break;
      // Validaciones para otros pasos...
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNextStep = () => {
    if (validateStep(step)) {
      setStep(step + 1);
    }
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const processPayment = async () => {
    try {
      setIsLoading(true);
      // Lógica de procesamiento de pago
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return true;
    } catch (error) {
      setErrors({ payment: error.message });
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    step,
    formData,
    errors,
    isLoading,
    handleChange,
    handleNextStep,
    handlePreviousStep,
    processPayment,
  };
};
