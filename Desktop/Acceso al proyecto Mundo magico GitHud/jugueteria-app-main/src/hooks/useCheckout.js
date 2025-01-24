import { useState } from "react";
import {
  validateEmail,
  validatePhone,
  validateDNI,
} from "../utils/validadores";

export const useCheckout = () => {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    lastname: "",
    dni: "",
    telefono: "",
    metodoEntrega: "tienda",
    metodoPago: "debito",
  });

  const validateStep = (stepNumber) => {
    const newErrors = {};

    switch (stepNumber) {
      case 1:
        if (!formData.username.trim()) {
          newErrors.username = "El nombre es obligatorio";
        }
        if (!formData.lastname.trim()) {
          newErrors.lastname = "El apellido es obligatorio";
        }
        if (!formData.email.trim()) {
          newErrors.email = "El email es obligatorio";
        } else if (!validateEmail(formData.email)) {
          newErrors.email = "Email inválido";
        }
        if (!formData.telefono.trim()) {
          newErrors.telefono = "El teléfono es obligatorio";
        } else if (!validatePhone(formData.telefono)) {
          newErrors.telefono = "Teléfono inválido - debe tener 9 dígitos";
        }
        if (!formData.dni.trim()) {
          newErrors.dni = "El DNI es obligatorio";
        } else if (!validateDNI(formData.dni)) {
          newErrors.dni = "DNI inválido - debe tener 8 dígitos";
        }
        break;
    }

    console.log("Errores de validación:", newErrors); // debugging
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Limpiar el error del campo que se está modificando
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
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
