import React from 'react';
import Producto from '../components/carrito/ProductoCarrito';
import Resumen from '../components/carrito/ResumenCarrito';
import BannerCategoria from '../components/BannerCategoria';

function Carrito() {
  const productos = [
    {
      id: 1,
      nombre: 'Juego De Mesa - Monopoly Clásico',
      marca: 'HASBRO',
      precio: 30.9,
      cantidad: 2,
      imagen:
        'https://production-tailoy-repo-magento-statics.s3.amazonaws.com/imagenes/872x872/productos/i/j/u/juego-de-mesa-hasbro-gaming-monopoly-peru-refresh-59588-default-1.jpg',
    },
    {
      id: 2,
      nombre: 'Juego De Mesa - Monopoly Clásico',
      marca: 'HASBRO',
      precio: 30.9,
      cantidad: 2,
      imagen:
        'https://production-tailoy-repo-magento-statics.s3.amazonaws.com/imagenes/872x872/productos/i/j/u/juego-de-mesa-hasbro-gaming-monopoly-peru-refresh-59588-default-1.jpg',
    },

  ];

  const subtotal = productos.reduce(
    (acc, producto) => acc + producto.precio * producto.cantidad,
    0,
  );
  const descuentos = 0;
  const total = subtotal - descuentos;

  return (
    <>
      <BannerCategoria url_imagen="https://images.pexels.com/photos/12932822/pexels-photo-12932822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        nombreCategoria="Carrito de Compras" />

      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-2/3">
          <div className="space-y-4">
            {productos.map((producto) => (
              <Producto key={producto.id} producto={producto} />
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/3">
          <Resumen subtotal={subtotal} descuentos={descuentos} total={total} />
        </div>
      </div>
    </>
  );
}

export default Carrito;
