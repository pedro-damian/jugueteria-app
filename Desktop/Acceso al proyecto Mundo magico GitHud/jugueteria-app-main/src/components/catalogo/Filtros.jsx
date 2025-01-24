import React from 'react';

function Filtros({ filters, handleFilterChange }) {
  return (
    <aside className="w-1/4 p-4">
      <h2 className="text-xl font-bold text-green-600 mb-4">Filtros</h2>
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Categorías</h3>
        <ul>
          {['Juegos de Mesa', 'Juguetes Deportivos', 'Figuras de Accion', 'Muñecas', 'Vehiculos', 'Juguetes Educativos'].map(categoria => (
            <li key={categoria} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={categoria}
                checked={filters.categorias.includes(categoria)}
                onChange={() => handleFilterChange('categorias', categoria)}
                className="mr-2"
              />
              <label htmlFor={categoria} className="text-gray-700">{categoria}</label>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="font-semibold mb-2">Marcas</h3>
        <ul>
          {['Mattel', 'Hasbro', 'Hot Wheels', 'Marvel', 'Barbie', 'Lego'].map(marca => (
            <li key={marca} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={marca}
                checked={filters.marcas.includes(marca)}
                onChange={() => handleFilterChange('marcas', marca)}
                className="mr-2"
              />
              <label htmlFor={marca} className="text-gray-700">{marca}</label>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="font-semibold mb-2">Precio</h3>
        <ul>
          {['0-50', '50-100', '100-200', '200-500'].map(rango => (
            <li key={rango} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={rango}
                checked={filters.precio.includes(rango)}
                onChange={() => handleFilterChange('precio', rango)}
                className="mr-2"
              />
              <label htmlFor={rango} className="text-gray-700">
                {rango === '200-500' ? 'S/200 - S/500' : `S/${rango.replace('-', ' - S/')}`}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default Filtros;
