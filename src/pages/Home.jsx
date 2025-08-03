import { useState, useRef, useEffect } from 'react';
import products from '../data/products';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const searchRef = useRef(null);


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        if (searchTerm === '') {
          setShowSearch(false);
        }
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [searchTerm]);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
       
        
       
        <div ref={searchRef} className="relative">
          {!showSearch ? (
            <button 
              onClick={() => {
                setShowSearch(true);
                setTimeout(() => searchRef.current?.querySelector('input')?.focus(), 0);
              }}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
              aria-label="Search"
            >
              <svg 
                className="h-6 w-6 text-gray-500 dark:text-gray-400" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                />
              </svg>
            </button>
          ) : (
            <div className={`flex items-center bg-white dark:bg-gray-800 rounded-full shadow-sm border ${
              isFocused ? 'border-blue-500 dark:border-blue-400' : 'border-gray-300 dark:border-gray-600'
            } pl-3 pr-2 py-1 transition-all duration-200`}>
              <svg 
                className="h-5 w-5 text-gray-400 mr-2" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                />
              </svg>
              <input
                type="text"
                placeholder="Search products..."
                className="bg-transparent border-none focus:outline-none focus:ring-0 w-40 md:w-52 py-1 text-sm dark:text-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                autoFocus
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />
              <div className="flex space-x-1 ml-1">
                {searchTerm && (
                  <button 
                    onClick={() => setSearchTerm('')}
                    className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <svg 
                      className="h-4 w-4 text-gray-500 dark:text-gray-400" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M6 18L18 6M6 6l12 12" 
                      />
                    </svg>
                  </button>
                )}
                <button 
                  onClick={() => {
                    setSearchTerm('');
                    setShowSearch(false);
                  }}
                  className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <svg 
                    className="h-4 w-4 text-gray-500 dark:text-gray-400" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M19 9l-7 7-7-7" 
                    />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products
          .filter((product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
      
      {products.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase())).length === 0 && searchTerm && (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400 text-lg">No products found for "{searchTerm}"</p>
          <button 
            onClick={() => setSearchTerm('')}
            className="mt-2 text-blue-500 dark:text-blue-400 hover:underline"
          >
            Clear search
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;