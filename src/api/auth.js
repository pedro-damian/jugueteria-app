export const loginUser = async (credentials) => {
  try {
    const response = await fetch("http://localhost:8080/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Error al iniciar sesión");
    }

    return await response.json(); // Devuelve los datos en caso de éxito
  } catch (error) {
    throw new Error(error.message || "Error de conexión");
  }
};
