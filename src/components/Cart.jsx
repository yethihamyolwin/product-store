import React from "react";

const Cart = ({ cart }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 grid grid-cols-1 md:grid-cols-6 gap-4 items-center shadow-sm mb-4">
      {/* Product Image */}
      <div className="col-span-1 flex justify-center">
        <img
          src={cart.product.image}
          alt={cart.product.title}
          className="h-24 w-24 object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="col-span-1 md:col-span-3 text-center md:text-left">
        <p className="font-semibold text-lg mb-1 truncate">
          {cart.product.title}
        </p>
        <p className="text-gray-500 font-medium">
          Price: ${cart.product.price}
        </p>
      </div>

      {/* Quantity Controls */}
      <div className="col-span-1 flex flex-col items-center gap-2">
        <p className="text-sm font-medium text-gray-400 uppercase tracking-wider">
          Quantity
        </p>
        <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
          <button className="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition-colors text-xl font-bold">
            −
          </button>
          <span className="px-4 py-1 font-semibold min-w-10 text-center">
            {cart.quantity}
          </span>
          <button className="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition-colors text-xl font-bold">
            +
          </button>
        </div>
      </div>

      {/* Total Cost */}
      <div className="col-span-1 text-center md:text-end">
        <p className="text-sm text-gray-400 md:hidden">Total Cost</p>
        <p className="text-2xl font-bold">${cart.cost.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Cart;
