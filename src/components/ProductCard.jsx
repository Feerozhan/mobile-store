import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => (
  <div className="border rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 group relative">
   
    {product.onSale && (
      <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full z-20">
        SALE
      </div>
    )}

    <div className="relative flex items-center justify-center h-64 bg-gray-50 dark:bg-gray-700 overflow-hidden p-4">
     
      <img
        src={product.image}
        alt={product.name}
        className="h-full object-contain transition-all duration-500 group-hover:scale-110"
        loading="lazy"
      />
      
     
      <div className="absolute bottom-4 w-4/5 h-3 bg-black/20 rounded-full blur-md z-0" />
    </div>

    <div className="p-4 space-y-2">
      <div className="flex justify-between items-start">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white line-clamp-1">
          {product.name}
        </h2>
        {product.rating && (
          <div className="flex items-center bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded-full">
            <span className="text-yellow-500">★</span>
            <span className="text-xs ml-1 text-blue-800 dark:text-blue-200">
              {product.rating}
            </span>
          </div>
        )}
      </div>

      <div className="flex items-center space-x-2">
        {product.originalPrice && (
          <span className="text-sm line-through text-gray-500 dark:text-gray-400">
            ${product.originalPrice}
          </span>
        )}
        <p className={`font-bold ${
          product.originalPrice ? 'text-red-500' : 'text-blue-600 dark:text-blue-400'
        }`}>
          ${product.price}
        </p>
      </div>

      <div className="pt-2">
        <Link
          to={`/product/${product.id}`}
          className="w-full inline-flex justify-center items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all shadow-sm hover:shadow-md"
        >
          View Details
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  </div>
);

export default ProductCard;