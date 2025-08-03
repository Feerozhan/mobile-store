import React, { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';
import { useCart } from '../context/CartContext';
import { FiShoppingCart, FiChevronRight, FiStar, FiTruck, FiShield, FiCheck } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Product = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart } = useCart();
  const cartButtonRef = useRef(null);

  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || '');
  const [selectedStorage, setSelectedStorage] = useState(product.storage?.[0] || '');
  const [showAlert, setShowAlert] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleAddToCart = () => {
    const productWithQty = { 
      ...product, 
      quantity,
      selectedColor,
      selectedStorage
    };
    addToCart(productWithQty);
   
    setShowAlert(true);
    setIsAnimating(true);
    
    
    setTimeout(() => setShowAlert(false), 3000);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  const cartAnimation = {
    initial: { scale: 1 },
    animate: { 
      scale: [1, 1.1, 1],
      transition: { duration: 0.6 }
    }
  };

  const flyingCart = {
    initial: { 
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0
    },
    animate: {
      opacity: [1, 0.8, 0],
      scale: [1, 0.7],
      x: [0, 80],
      y: [0, -80],
      transition: { duration: 0.8 }
    }
  };

  const alertAnimation = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 }
  };

  if (!product) return (
    <div className="min-h-screen flex items-center justify-center p-10 text-center">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Product not found</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          The product you're looking for doesn't exist or has been removed.
        </p>
      </div>
    </div>
  );

  const discountedPrice = product.discount 
    ? (product.price - product.price * (product.discount / 100)).toFixed(2)
    : product.price.toFixed(2);

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
    
      <AnimatePresence>
        {showAlert && (
          <motion.div
            key="alert"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={alertAnimation}
            className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 flex items-center space-x-2"
          >
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="text-xl"
            >
              <FiCheck />
            </motion.span>
            <span>Added {quantity} {product.name} to your cart!</span>
          </motion.div>
        )}
      </AnimatePresence>

     
      <AnimatePresence>
        {isAnimating && (
          <motion.div
            key="flying-cart"
            initial="initial"
            animate="animate"
            variants={flyingCart}
            className="fixed z-50 pointer-events-none"
            style={{
              left: cartButtonRef.current?.getBoundingClientRect().left + 20,
              top: cartButtonRef.current?.getBoundingClientRect().top
            }}
          >
            <FiShoppingCart className="text-blue-500 h-6 w-6" />
          </motion.div>
        )}
      </AnimatePresence>

    
      <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-6">
        <span>Home</span>
        <FiChevronRight className="mx-2" />
        <span>Phones</span>
        <FiChevronRight className="mx-2" />
        <span className="font-medium text-gray-800 dark:text-white">{product.brand}</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
     
        <div className="lg:w-1/2">
          <div className="relative bg-gray-100 dark:bg-gray-700 rounded-xl overflow-hidden h-96 flex items-center justify-center p-4">
            <img
              src={product.image}
              alt={product.name}
              className="max-h-full max-w-full object-contain"
            />
            {product.isNew && (
              <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                NEW
              </span>
            )}
          </div>
        </div>

        <div className="lg:w-1/2 space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{product.name}</h1>
            <div className="flex items-center mt-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <FiStar 
                    key={i} 
                    className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>
          </div>

          <div className="space-y-2">
            {product.discount ? (
              <div className="flex items-center">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">${discountedPrice}</span>
                <span className="ml-3 line-through text-gray-500">${product.price}</span>
                <span className="ml-3 bg-red-100 text-red-800 text-sm font-medium px-2 py-0.5 rounded">
                  {product.discount}% OFF
                </span>
              </div>
            ) : (
              <span className="text-3xl font-bold text-gray-900 dark:text-white">${product.price}</span>
            )}
            <p className="text-green-600 text-sm flex items-center">
              <FiTruck className="mr-1" />
              {product.freeShipping ? 'Free shipping' : 'Shipping calculated at checkout'}
            </p>
          </div>

        
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300">{product.description}</p>
          </div>

          
          {product.colors && (
            <div>
              <h3 className="text-sm font-medium text-gray-900 dark:text-white">Color</h3>
              <div className="mt-2 flex space-x-2">
                {product.colors.map(color => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-3 py-1 rounded-full border ${selectedColor === color ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30' : 'border-gray-300'}`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}

          {product.storage && (
            <div>
              <h3 className="text-sm font-medium text-gray-900 dark:text-white">Storage</h3>
              <div className="mt-2 flex space-x-2">
                {product.storage.map(storage => (
                  <button
                    key={storage}
                    onClick={() => setSelectedStorage(storage)}
                    className={`px-3 py-1 rounded-md border ${selectedStorage === storage ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30' : 'border-gray-300'}`}
                  >
                    {storage}
                  </button>
                ))}
              </div>
            </div>
          )}

         
          <div className="flex items-center space-x-4">
            <h3 className="text-sm font-medium text-gray-900 dark:text-white">Quantity</h3>
            <div className="flex items-center border rounded-md overflow-hidden">
              <button
                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
                onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
              >
                -
              </button>
              <span className="px-4 w-12 text-center">{quantity}</span>
              <button
                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
                onClick={() => setQuantity(prev => prev + 1)}
              >
                +
              </button>
            </div>
            <span className="text-sm text-gray-500">
              {product.stock > 5 ? 'In stock' : `Only ${product.stock} left!`}
            </span>
          </div>

        
          <div className="flex space-x-4 pt-4">
            <motion.button
              ref={cartButtonRef}
              onClick={handleAddToCart}
              whileTap={{ scale: 0.95 }}
              variants={cartAnimation}
              animate={isAnimating ? "animate" : "initial"}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg shadow-md transition flex items-center justify-center relative overflow-hidden"
            >
              
              {isAnimating && (
                <motion.span
                  className="absolute bg-white opacity-30 rounded-full"
                  initial={{ scale: 0, opacity: 0.5 }}
                  animate={{ scale: 2, opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  style={{ width: 20, height: 20 }}
                />
              )}
              
              <FiShoppingCart className="mr-2" />
              Add to Cart
            </motion.button>
            
            <motion.button 
              whileTap={{ scale: 0.95 }}
              className="flex-1 bg-gray-900 hover:bg-gray-800 text-white py-3 px-6 rounded-lg shadow-md transition"
            >
              Buy Now
            </motion.button>
          </div>

      
          <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Key Features</h3>
            <ul className="mt-4 space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

         
          <div className="flex items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <FiShield className="h-8 w-8 text-blue-500 mr-3" />
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white">1 Year Warranty</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Coverage for manufacturer defects</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;