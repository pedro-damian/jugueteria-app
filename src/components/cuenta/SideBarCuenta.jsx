function SidebarCuenta({ seccionActiva, setSeccionActiva }) {
  const secciones = [
    { id: "datos", nombre: "Datos Personales" },
    { id: "pedidos", nombre: "Mis Pedidos" },
    { id: "password", nombre: "Cambiar Contraseña" },
    { id: "salir", nombre: "Cerrar Sesión" },
  ];

  return (
    <div className="w-full md:w-64 bg-white rounded-lg shadow-sm p-4">
      <nav>
        <ul className="space-y-2">
          {secciones.map((seccion) => (
            <li key={seccion.id}>
              <button
                onClick={() => setSeccionActiva(seccion.id)}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  seccionActiva === seccion.id
                    ? "bg-green-500 text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                {seccion.nombre}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default SidebarCuenta;
