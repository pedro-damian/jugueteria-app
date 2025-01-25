import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DatosPersonales = () => {
  const navigate = useNavigate(); // Inicializa el hook de navigate
  const [user, setUser] = useState({
    username: "",
    lastname: "",
    email: "",
    phone: "",
    gender: "",
    dni: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const userId = localStorage.getItem("id"); // Obtener el id del localStorage
    console.log("User ID from localStorage:", userId); // Verificar el valor del ID

    if (!userId) {
      setError("El id del usuario no es válido");
      navigate("/login");  // Redirigir al login si no hay ID
      return;
    }

    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(
          `http://localhost:8080/auth/obtenerUsuarioPorId/${userId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Error en la solicitud");
        }

        const data = await response.json();
        console.log("Datos del usuario obtenidos:", data); // Verificar los datos que se obtiene

        // Asegurarse de que los campos estén definidos y actualizar el estado correctamente
        setUser((prevUser) => ({
          ...prevUser,
          username: data.username || "",
          lastname: data.lastname || "",
          email: data.email || "",
          phone: data.phone || "",
          gender: data.gender || "",
          dni: data.dni || "",
        }));

        setLoading(false);
      } catch (error) {
        console.error("Error al cargar los datos:", error);
        setError("Hubo un problema al cargar los datos del usuario");
        setLoading(false);
      }
    };

    fetchData();
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`Campo actualizado: ${name} = ${value}`); // Verificar qué campo se actualiza
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleUpdate = async () => {
    if (!user.username || !user.email) {
      alert("Por favor, completa los campos obligatorios");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("id");

      const response = await fetch(
        `http://localhost:8080/auth/actualizarUsuarioPorId/${userId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(user),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        if (errorText) {
          try {
            const errorData = JSON.parse(errorText);
            setError(errorData.error || "Error al actualizar el usuario");
          } catch (parseError) {
            setError("Error al procesar la respuesta de la API.");
          }
        } else {
          setError("No se pudo procesar la respuesta de la API.");
        }
        return;
      }

      alert("Usuario actualizado con éxito");
      setIsEditing(false);
    } catch (error) {
      console.error("Error al actualizar los datos:", error);
      setError("Hubo un error al actualizar los datos");
    }
  };

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Actualizar Datos Personales</h2>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="text-green-500 hover:text-green-600"
        >
          {isEditing ? "Cancelar" : "Editar"}
        </button>
      </div>

      <form onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nombre de Usuario
              </label>
              <input
                type="text"
                name="username"
                value={user.username}
                onChange={handleChange}
                required
                disabled={!isEditing}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                required
                disabled={!isEditing}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                DNI
              </label>
              <input
                type="text"
                name="dni"
                value={user.dni}
                onChange={handleChange}
                disabled={!isEditing}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Apellido
              </label>
              <input
                type="text"
                name="lastname"
                value={user.lastname}
                onChange={handleChange}
                disabled={!isEditing}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Teléfono
              </label>
              <input
                type="text"
                name="phone"
                value={user.phone}
                onChange={handleChange}
                disabled={!isEditing}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Género
              </label>
              <select
                name="gender"
                value={user.gender}
                onChange={handleChange}
                disabled={!isEditing}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              >
                <option value="">Seleccione</option>
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
                <option value="Otro">Otro</option>
              </select>
            </div>
          </div>
        </div>

        {isEditing && (
          <div className="mt-6">
            <button
              type="submit"
              onClick={handleUpdate}
              className="bg-green-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-green-600"
            >
              Guardar Cambios
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default DatosPersonales;
