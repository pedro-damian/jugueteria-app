function MisPedidos() {
  const pedidos = [
    {
      id: "1",
      fecha: "2024-01-15",
      total: 299.99,
      estado: "Entregado",
      productos: [{ nombre: "Juguete 1", cantidad: 2, precio: 149.99 }],
    },
    // Más pedidos...
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-6">Mis Pedidos</h2>

      <div className="space-y-4">
        {pedidos.map((pedido) => (
          <div key={pedido.id} className="border rounded-lg p-4">
            <div className="flex justify-between items-center mb-4">
              <div>
                <span className="font-medium">Pedido #{pedido.id}</span>
                <p className="text-sm text-gray-600">
                  {new Date(pedido.fecha).toLocaleDateString()}
                </p>
              </div>
              <div className="text-right">
                <span className="font-medium">S/. {pedido.total}</span>
                <p
                  className={`text-sm ${
                    pedido.estado === "Entregado"
                      ? "text-green-500"
                      : "text-blue-500"
                  }`}
                >
                  {pedido.estado}
                </p>
              </div>
            </div>

            <div className="border-t pt-4">
              {pedido.productos.map((producto, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span>
                    {producto.nombre} x{producto.cantidad}
                  </span>
                  <span>S/. {producto.precio * producto.cantidad}</span>
                </div>
              ))}
            </div>

            <button className="mt-4 text-green-500 hover:text-green-600">
              Ver detalles
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MisPedidos;
