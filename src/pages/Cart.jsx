import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, increaseQty, decreaseQty } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-300">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cart.map(item => (
            <div
              key={item.id}
              className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-5 flex items-center justify-between"
            >
              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {item.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">${item.price}</p>
                <div className="flex items-center gap-3 mt-2">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="bg-gray-200 dark:bg-gray-600 px-3 py-1 rounded text-xl font-bold"
                  >
                    -
                  </button>
                  <span className="text-lg font-medium text-gray-800 dark:text-white">{item.quantity}</span>
                  <button
                    onClick={() => increaseQty(item.id)}
                    className="bg-gray-200 dark:bg-gray-600 px-3 py-1 rounded text-xl font-bold"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex flex-col items-end">
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:underline text-sm"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="text-right mt-8">
            <div className="text-xl font-semibold text-gray-800 dark:text-white">
              Total: <span className="text-blue-600 dark:text-blue-400">${total.toFixed(2)}</span>
            </div>
           <Link
  to="/checkout"
  className="inline-block mt-4 bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition-all text-center"
>
  Proceed to Checkout
</Link>

          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
