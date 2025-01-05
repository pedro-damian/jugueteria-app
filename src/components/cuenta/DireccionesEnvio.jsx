import { useState } from "react";

function DireccionesEnvio() {
  const [direcciones, setDirecciones] = useState([
    {
      id: 1,
      nombre: "Casa",
      direccion: "Av. Principal 123",
      ciudad: "Lima",
      distrito: "Miraflores",
      telefono: "987654321",
      predeterminada: true,
    },
    {
      id: 2,
      nombre: "Trabajo",
      direccion: "Calle Comercial 456",
      ciudad: "Lima",
      distrito: "San Isidro",
      telefono: "987654322",
      predeterminada: false,
    },
  ]);

  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [nuevaDireccion, setNuevaDireccion] = useState({
    nombre: "",
    direccion: "",
    ciudad: "",
    distrito: "",
    telefono: "",
    predeterminada: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para guardar la nueva dirección
    setDirecciones([
      ...direcciones,
      { ...nuevaDireccion, id: direcciones.length + 1 },
    ]);
    setMostrarFormulario(false);
    setNuevaDireccion({
      nombre: "",
      direccion: "",
      ciudad: "",
      distrito: "",
      telefono: "",
      predeterminada: false,
    });
  };

  const eliminarDireccion = (id) => {
    setDirecciones(direcciones.filter((dir) => dir.id !== id));
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Direcciones de Envío</h2>
        <button
          onClick={() => setMostrarFormulario(true)}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
        >
          Agregar Nueva Dirección
        </button>
      </div>

      {/* Lista de direcciones */}
      <div className="space-y-4">
        {direcciones.map((dir) => (
          <div
            key={dir.id}
            className="border rounded-lg p-4 relative hover:shadow-md transition-shadow"
          >
            {dir.predeterminada && (
              <span className="absolute top-2 right-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                Predeterminada
              </span>
            )}
            <h3 className="font-medium">{dir.nombre}</h3>
            <p className="text-gray-600">{dir.direccion}</p>
            <p className="text-gray-600">
              {dir.distrito}, {dir.ciudad}
            </p>
            <p className="text-gray-600">Tel: {dir.telefono}</p>
            <div className="mt-4 flex space-x-4">
              <button className="text-blue-500 hover:text-blue-700">
                Editar
              </button>
              <button
                onClick={() => eliminarDireccion(dir.id)}
                className="text-red-500 hover:text-red-700"
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Formulario para nueva dirección */}
      {mostrarFormulario && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h3 className="text-lg font-semibold mb-4">Nueva Dirección</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Nombre de la dirección
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  value={nuevaDireccion.nombre}
                  onChange={(e) =>
                    setNuevaDireccion({
                      ...nuevaDireccion,
                      nombre: e.target.value,
                    })
                  }
                />
              </div>
              {/* Agregar más campos del formulario aquí */}
              <div className="flex justify-end space-x-4 mt-6">
                <button
                  type="button"
                  onClick={() => setMostrarFormulario(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                >
                  Guardar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default DireccionesEnvio;
