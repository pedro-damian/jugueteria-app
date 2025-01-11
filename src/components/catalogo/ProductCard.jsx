import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="producto-card block border rounded-lg p-4 shadow hover:shadow-lg transition-shadow no-underline">
      <img
        src={product.image}
        alt={`Imagen de ${product.name}`}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <p className="text-gray-500 uppercase text-xs">{product.brand}</p>
        <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
        <p className="text-gray-500 text-xs mt-1">Código: {product.code}</p>
        <p className="text-green-600 font-bold mt-2">S/ {product.price.toFixed(2)}</p>
        <div className="mt-4 flex items-center justify-between">
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition-colors">
            Agregar
          </button>
          <button className="text-gray-500 hover:text-red-500 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
