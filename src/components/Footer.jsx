import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { FiMail, FiPhone } from 'react-icons/fi';

const Footer = () => (
  <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 mt-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* Brand Section */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Free Store
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          Your one-stop shop for quality tech products with cutting-edge technology.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
          Quick Links
        </h4>
        <ul className="space-y-3">
          <li>
            <Link 
              to="/privacy" 
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center"
            >
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link 
              to="/terms" 
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center"
            >
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Terms of Service
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center"
            >
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Contact Us
            </Link>
          </li>
          <li>
            <Link 
              to="/faq" 
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center"
            >
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              FAQ
            </Link>
          </li>
        </ul>
      </div>

     
      <div>
        <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
          Contact Us
        </h4>
        <div className="space-y-3">
          <div className="flex items-start">
            <FiMail className="h-5 w-5 text-blue-500 mt-0.5 mr-2" />
            <div>
              <p className="text-gray-600 dark:text-gray-400">Email</p>
              <a 
                href="mailto:freestore@gmail.com" 
                className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                freestore@gmail.com
              </a>
            </div>
          </div>
          <div className="flex items-start">
            <FiPhone className="h-5 w-5 text-blue-500 mt-0.5 mr-2" />
            <div>
              <p className="text-gray-600 dark:text-gray-400">Phone</p>
              <a 
                href="tel:+923363775256" 
                className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                +92 336 3775256
              </a>
            </div>
          </div>
        </div>
      </div>


      <div>
        <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
          Follow Us
        </h4>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <FaFacebook className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-400 transition-colors">
            <FaTwitter className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">
            <FaInstagram className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-600 hover:text-red-600 transition-colors">
            <FaYoutube className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-700 transition-colors">
            <FaLinkedin className="h-6 w-6" />
          </a>
        </div>
       
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">
            We Accept
          </h4>
          <div className="flex space-x-2">
            <div className="bg-white p-1 rounded shadow-sm">
              <img src="/images/visa-512.webp" alt="Visa" className="h-6" />
            </div>
            <div className="bg-white p-1 rounded shadow-sm">
              <img src="/images/mastercard.webp" alt="Mastercard" className="h-6" />
            </div>
            <div className="bg-white p-1 rounded shadow-sm">
              <img src="/images/PayPal1.png" alt="PayPal" className="h-6" />
            </div>
          </div>
        </div>
      </div>
    </div>

    
    <div className="bg-gray-100 dark:bg-gray-800 py-4">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-gray-500 dark:text-gray-400">
    &copy; {new Date().getFullYear()} Free Store. All rights reserved.
  </div>
</div>
  </footer>
);

export default Footer;