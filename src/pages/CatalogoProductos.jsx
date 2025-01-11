import React, { useState, useEffect } from 'react';
import ProductCard from '../components/catalogo/ProductCard';
import Filtros from '../components/catalogo/Filtros';
import { productos as initialProducts } from '../data/productos';

function CatalogoProductos() {
  const [products, setProducts] = useState(initialProducts);
  const [filters, setFilters] = useState({
    categorias: [],
    marcas: [],
    precio: [],
  });
  const [orden, setOrden] = useState("menor-mayor");

  const handleFilterChange = (filterType, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterType]: prevFilters[filterType].includes(value)
        ? prevFilters[filterType].filter(item => item !== value)
        : [...prevFilters[filterType], value],
    }));
  };

  const handleOrdenChange = (event) => {
    setOrden(event.target.value);
  };

  const filterProducts = () => {
    let filteredProducts = initialProducts;

    if (filters.categorias.length > 0) {
      filteredProducts = filteredProducts.filter(product =>
        filters.categorias.includes(product.categoria)
      );
    }

    if (filters.marcas.length > 0) {
      filteredProducts = filteredProducts.filter(product =>
        filters.marcas.includes(product.brand)
      );
    }

    if (filters.precio.length > 0) {
      filteredProducts = filteredProducts.filter(product => {
        const price = parseFloat(product.price);
        return filters.precio.some(range => {
          const [min, max] = range.split('-').map(Number);
          return price >= min && (max ? price <= max : true);
        });
      });
    }

    if (orden === "mayor-menor") {
      filteredProducts.sort((a, b) => b.price - a.price);
    } else {
      filteredProducts.sort((a, b) => a.price - b.price);
    }

    setProducts(filteredProducts);
  };

  useEffect(() => {
    filterProducts();
  }, [filters, orden]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Catálogo</h1>
        <div className="flex items-center">
          <label htmlFor="ordenar" className="mr-2 text-gray-600">
            Ordenar por:
          </label>
          <select
            id="ordenar"
            className="border border-gray-300 rounded px-3 py-1"
            value={orden}
            onChange={handleOrdenChange}
          >
            <option value="menor-mayor">Precio: menor a mayor</option>
            <option value="mayor-menor">Precio: mayor a menor</option>
          </select>
        </div>
      </div>

      <div className="flex">
        <Filtros filters={filters} handleFilterChange={handleFilterChange} />

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex-grow ml-4">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      </div>
    </div>
  );
}

export default CatalogoProductos;
