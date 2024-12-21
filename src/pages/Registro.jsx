import { Link } from "react-router-dom";
import { useState } from "react";

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
  const [token, setToken] = useState("");

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
        const response = await fetch("http://localhost:8080/auth/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          const data = await response.json();

          // Guardar el token recibido
          const receivedToken = data.token;
          setToken(receivedToken);
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
        } else {
          const errorData = await response.json();
          setErrorMessage(errorData.message || "Error al registrar.");
          console.error("Error en el registro:", errorData);
        }
      } catch (error) {
        setErrorMessage(
          "Error al conectar con el servidor. Por favor, intenta más tarde."
        );
        console.error("Error al conectar con la API:", error);
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
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Nombre:
              </label>
              <input
                id="username"
                name="username"
                type="text"
                value={formData.username}
                onChange={handleChange}
                placeholder="Ingresa tu nombre"
                className={`mt-1 block w-full rounded-md shadow-sm ${
                  errors.username ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.username && (
                <p className="mt-1 text-sm text-red-600">{errors.username}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="lastname"
                className="block text-sm font-medium text-gray-700"
              >
                Apellido:
              </label>
              <input
                id="lastname"
                name="lastname"
                type="text"
                value={formData.lastname}
                onChange={handleChange}
                placeholder="Ingresa tu apellido"
                className={`mt-1 block w-full rounded-md shadow-sm ${
                  errors.lastname ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.lastname && (
                <p className="mt-1 text-sm text-red-600">{errors.lastname}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Correo electrónico:
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Ingresa tu correo electrónico"
                className={`mt-1 block w-full rounded-md shadow-sm ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Contraseña:
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Crea una contraseña"
                className={`mt-1 block w-full rounded-md shadow-sm ${
                  errors.password ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">{errors.password}</p>
              )}
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 transition duration-200"
              >
                Registrarse
              </button>
            </div>
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
