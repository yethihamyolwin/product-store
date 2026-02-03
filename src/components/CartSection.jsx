import React from "react";
import Cart from "./Cart";
import carts from "../data/carts";

const CartSection = () => {
  // 1. Calculate Subtotal (အားလုံးပေါင်း cost)
  const subtotal = carts.reduce((acc, curr) => acc + curr.cost, 0);

  // 2. Calculate Tax and Net Total
  const taxRate = 0.1; // 10%
  const tax = subtotal * taxRate;
  const netTotal = subtotal + tax;
  return (
    <>
      <div className="max-w-4xl mx-auto p-4">
        <div className="flex flex-col gap-3 mb-8">
          {carts.map((cart) => (
            <Cart key={cart.id} cart={cart} />
          ))}
        </div>

        {/* Summary Section */}
        <div className="border-t pt-6 flex flex-col items-end">
          <div className="w-full md:w-80 space-y-3">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span className="font-semibold">${subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between text-gray-600">
              <span>Tax (10%)</span>
              <span className="font-semibold">${tax.toFixed(2)}</span>
            </div>

            <div className="flex justify-between text-2xl font-bold border-t pt-3">
              <span>Net Total</span>
              <span className="text-blue-600">${netTotal.toFixed(2)}</span>
            </div>

            <button className="w-full mt-4 bg-black text-white py-4 rounded-xl font-bold hover:bg-gray-800 transition-all active:scale-[0.98]">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartSection;
