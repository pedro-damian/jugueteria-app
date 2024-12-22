import { Link } from "react-router-dom";
import { useState } from "react";
import { registerUser } from "../api/Register";

function Registro() {
  const [formData, setFormData] = useState({
    username: "",
    lastname: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const tempErrors = {};
    if (!formData.username.trim())
      tempErrors.username = "El nombre es requerido.";
    if (!formData.lastname.trim())
      tempErrors.lastname = "El apellido es requerido.";
    if (!formData.email.trim()) {
      tempErrors.email = "El correo electrónico es requerido.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Por favor, ingresa un correo válido.";
    }
    if (!formData.password) {
      tempErrors.password = "La contraseña es requerida.";
    } else if (formData.password.length < 6) {
      tempErrors.password = "La contraseña debe tener al menos 6 caracteres.";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    if (validateForm()) {
      try {
        const data = await registerUser(formData);

        // Guardar el token recibido
        const receivedToken = data.token;
        localStorage.setItem("authToken", receivedToken);

        setSuccessMessage("Registro exitoso. ¡Bienvenido!");
        console.log("Token recibido:", receivedToken);

        // Limpiar el formulario
        setFormData({
          username: "",
          lastname: "",
          email: "",
          password: "",
        });
      } catch (error) {
        setErrorMessage(error.message);
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Crear cuenta
          </h2>
        </div>
        <div className="bg-white rounded-lg shadow px-6 py-8 sm:px-8">
          {successMessage && (
            <div className="text-green-500 text-sm mb-4">{successMessage}</div>
          )}
          {errorMessage && (
            <div className="text-red-500 text-sm mb-4">{errorMessage}</div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            {["username", "lastname", "email", "password"].map((field) => (
              <div key={field}>
                <label
                  htmlFor={field}
                  className="block text-sm font-medium text-gray-700"
                >
                  {field.charAt(0).toUpperCase() + field.slice(1)}:
                </label>
                <input
                  id={field}
                  name={field}
                  type={field === "password" ? "password" : "text"}
                  value={formData[field]}
                  onChange={handleChange}
                  placeholder={`Ingresa tu ${field}`}
                  className={`w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none ${
                    errors[field] ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors[field] && (
                  <p className="mt-1 text-sm text-red-600">{errors[field]}</p>
                )}
              </div>
            ))}

            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 transition duration-200"
            >
              Registrarse
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              ¿Ya tienes una cuenta?{" "}
              <Link
                to="/login"
                className="font-medium text-green-600 hover:text-green-500"
              >
                Iniciar sesión
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registro;
