import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useState, useEffect } from "react";
import { FiSun, FiMoon, FiShoppingCart, FiHome } from "react-icons/fi";

const Navbar = () => {
  const { cart } = useCart();
  const [isDark, setIsDark] = useState(() => {
   
    return localStorage.getItem('darkMode') === 'true' || 
           (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    localStorage.setItem('darkMode', !isDark);
  };

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md p-4 flex justify-between items-center sticky top-0 z-50 transition-colors duration-300">
      <Link 
        to="/" 
        className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400"
      >
        Free Store
      </Link>
      
      <div className="flex items-center space-x-6">
        <Link 
          to="/" 
          className="flex items-center space-x-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <FiHome className="h-5 w-5" />
          <span>Home</span>
        </Link>
        
        <Link 
          to="/cart" 
          className="flex items-center space-x-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors relative"
        >
          <FiShoppingCart className="h-5 w-5" />
          <span>Cart</span>
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {cart.length}
            </span>
          )}
        </Link>
        
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          aria-label="Toggle dark mode"
        >
          {isDark ? (
            <FiSun className="h-5 w-5 text-yellow-300" />
          ) : (
            <FiMoon className="h-5 w-5 text-gray-700" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;