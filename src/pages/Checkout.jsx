import React from 'react';

const Checkout = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("✅ Form Submitted"); 
    alert('✅ Order Placed Successfully!');
  };

  return (
    <div className="max-w-xl mx-auto p-6 mt-10 bg-white dark:bg-gray-800 rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-6 text-center">Checkout</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Full Name</label>
          <input
            type="text"
            required
            className="w-full p-2 rounded border dark:bg-gray-700"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Address</label>
          <input
            type="text"
            required
            className="w-full p-2 rounded border dark:bg-gray-700"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Payment Method</label>
          <select
            required
            className="w-full p-2 rounded border dark:bg-gray-700"
          >
            <option value="">Select</option>
            <option value="cod">Cash on Delivery</option>
            <option value="card">Credit Card</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          🛍️ Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
