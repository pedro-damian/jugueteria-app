import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

function CambiarPassword() {
  const [formData, setFormData] = useState({
    passwordActual: "",
    passwordNuevo: "",
    confirmarPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState({
    actual: false,
    nuevo: false,
    confirmar: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Limpiar mensajes de error/éxito cuando el usuario empieza a escribir
    setError("");
    setSuccess("");
  };

  const togglePasswordVisibility = (field) => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Validaciones
    if (
      !formData.passwordActual ||
      !formData.passwordNuevo ||
      !formData.confirmarPassword
    ) {
      setError("Todos los campos son obligatorios");
      return;
    }

    if (formData.passwordNuevo !== formData.confirmarPassword) {
      setError("Las contraseñas nuevas no coinciden");
      return;
    }

    if (formData.passwordNuevo.length < 6) {
      setError("La contraseña nueva debe tener al menos 6 caracteres");
      return;
    }

    try {
      // Aquí iría la llamada a la API para cambiar la contraseña
      // await cambiarPassword(formData);

      setSuccess("Contraseña actualizada exitosamente");
      setFormData({
        passwordActual: "",
        passwordNuevo: "",
        confirmarPassword: "",
      });
    } catch (error) {
      setError("Error al actualizar la contraseña. Intente nuevamente.");
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
                type={showPassword.actual ? "text" : "password"}
                name="passwordActual"
                value={formData.passwordActual}
                onChange={handleChange}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              />
              <button
                type="button"
                onClick={() => togglePasswordVisibility("actual")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword.actual ? <FaRegEye /> : <FaRegEyeSlash />}
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
                type={showPassword.nuevo ? "text" : "password"}
                name="passwordNuevo"
                value={formData.passwordNuevo}
                onChange={handleChange}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              />
              <button
                type="button"
                onClick={() => togglePasswordVisibility("nuevo")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword.nuevo ? <FaRegEye /> : <FaRegEyeSlash />}
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
                type={showPassword.confirmar ? "text" : "password"}
                name="confirmarPassword"
                value={formData.confirmarPassword}
                onChange={handleChange}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              />
              <button
                type="button"
                onClick={() => togglePasswordVisibility("confirmar")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword.confirmar ? <FaRegEye /> : <FaRegEyeSlash />}
              </button>
            </div>
          </div>

          {/* Botón de envío */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Cambiar Contraseña
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CambiarPassword;
