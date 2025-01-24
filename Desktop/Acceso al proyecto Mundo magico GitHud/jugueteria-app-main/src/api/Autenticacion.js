export const loginUser = async (credentials) => {
  try {
    const response = await fetch("http://localhost:8080/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include", // Para manejar cookies si es necesario
      body: JSON.stringify({
        username: credentials.username,
        password: credentials.password,
      }),
    });

    // Para debugging
    console.log("Status:", response.status);
    console.log("Headers:", response.headers);

    if (!response.ok) {
      if (response.status === 403) {
        throw new Error("Credenciales inválidas");
      }

      // Intenta obtener el mensaje de error del servidor
      let errorMessage;
      try {
        const errorData = await response.json();
        errorMessage = errorData.message;
      } catch (e) {
        errorMessage = "Error al procesar la respuesta del servidor";
      }

      throw new Error(errorMessage || "Error al iniciar sesión");
    }

    const data = await response.json();
    console.log("Respuesta del servidor:", data); // ver qué datos recibimos

    return {
      token: data.token,
      username: data.username || credentials.username,
      email: data.email,
      // otros datos que pueda devolver la API
    };
    //return await response.json(); // Devuelve los datos en caso de éxito
  } catch (error) {
    throw new Error(error.message || "Error de conexión");
  }
};
