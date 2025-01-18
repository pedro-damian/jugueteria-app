import React, { useState, useEffect } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function CambiarPassword() {
  const [formData, setFormData] = useState({
    passwordActual: "",
    passwordNuevo: "",
    confirmarPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState({
    passwordActual: false,
    passwordNuevo: false,
    confirmarPassword: false,
  });
  const [userId, setUserId] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem("id");
    const token = localStorage.getItem("token");

    if (!userId || !token) {
      setError("No se encontró el ID de usuario o el token de autenticación.");
      navigate("/login");
      return;
    }

    setUserId(userId);
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError("");
    setSuccess("");
  };

  const togglePasswordVisibility = (field) => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleFetchError = async (response) => {
    const errorData = await response.json();
    setError(errorData.message || "Ocurrió un error");
    setIsSubmitting(false);
    return;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setIsSubmitting(true);

    if (!userId) {
      setError("El ID de usuario no está definido.");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:8080/api/usuarios/obtenerUsuarioPorId/${userId}`,
        {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (!response.ok) {
        await handleFetchError(response);
        return;
      }

      const data = await response.json();

      if (!formData.passwordActual || !formData.passwordNuevo || !formData.confirmarPassword) {
        setError("Todos los campos son obligatorios");
        setIsSubmitting(false);
        return;
      }

      if (formData.passwordNuevo !== formData.confirmarPassword) {
        setError("Las contraseñas nuevas no coinciden");
        setIsSubmitting(false);
        return;
      }

      if (formData.passwordNuevo.length < 6) {
        setError("La contraseña nueva debe tener al menos 6 caracteres");
        setIsSubmitting(false);
        return;
      }

      const changePasswordResponse = await fetch(
        `http://localhost:8080/api/auth/changePassword/${userId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({
            userId,
            currentPassword: formData.passwordActual,
            newPassword: formData.passwordNuevo,
            confirmPassword: formData.confirmarPassword,
          }),
        }
      );

      if (!changePasswordResponse.ok) {
        await handleFetchError(changePasswordResponse);
        return;
      }

      setSuccess("Contraseña actualizada exitosamente");
      setFormData({
        passwordActual: "",
        passwordNuevo: "",
        confirmarPassword: "",
      });

      setIsSubmitting(false);
      setTimeout(() => {
        navigate("/perfil");
      }, 2000); // Redirigir después de 2 segundos
    } catch (error) {
      console.error("Error en la solicitud:", error);
      setError(error.message || "Error al actualizar la contraseña");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-6">Cambiar Contraseña</h2>

      <form onSubmit={handleSubmit} className="max-w-md">
        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
            {error}
          </div>
        )}

        {success && (
          <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-md">
            {success}
          </div>
        )}

        <div className="space-y-4">
          {/* Contraseña Actual */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Contraseña Actual
            </label>
            <div className="relative">
              <input
                type={showPassword.passwordActual ? "text" : "password"}
                name="passwordActual"
                value={formData.passwordActual}
                onChange={handleChange}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                required
              />
              <button
                type="button"
                onClick={() => togglePasswordVisibility("passwordActual")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword.passwordActual ? <FaRegEye /> : <FaRegEyeSlash />}
              </button>
            </div>
          </div>

          {/* Contraseña Nueva */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Contraseña Nueva
            </label>
            <div className="relative">
              <input
                type={showPassword.passwordNuevo ? "text" : "password"}
                name="passwordNuevo"
                value={formData.passwordNuevo}
                onChange={handleChange}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                required
              />
              <button
                type="button"
                onClick={() => togglePasswordVisibility("passwordNuevo")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword.passwordNuevo ? <FaRegEye /> : <FaRegEyeSlash />}
              </button>
            </div>
          </div>

          {/* Confirmar Contraseña */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirmar Contraseña Nueva
            </label>
            <div className="relative">
              <input
                type={showPassword.confirmarPassword ? "text" : "password"}
                name="confirmarPassword"
                value={formData.confirmarPassword}
                onChange={handleChange}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                required
              />
              <button
                type="button"
                onClick={() => togglePasswordVisibility("confirmarPassword")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword.confirmarPassword ? <FaRegEye /> : <FaRegEyeSlash />}
              </button>
            </div>
          </div>

          {/* Botón de envío */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              disabled={isSubmitting || error || success} // Deshabilitar cuando hay error o éxito
            >
              {isSubmitting ? "Procesando..." : "Cambiar Contraseña"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CambiarPassword;
