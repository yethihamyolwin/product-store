import React from "react";
import Rating from "./Rating";
import { Link } from "react-router";
import carts from "../data/carts";

const ProductCard = ({
  product: {
    id,
    title,
    price,
    image,
    rating: { rate },
  },
}) => {
  return (
    <Link
      to={`/product-detail/${id}`}
      className="border border-black p-5 flex flex-col items-start gap-5"
    >
      <img src={image} alt={title} className="h-40" />
      <p className="font-bold line-clamp-2 min-h-12">{title}</p>
      <Rating rate={rate} />
      <div className="flex justify-between items-center w-full mt-auto pt-2">
        <p className="text-md font-semibold">Price (${price})</p>
        {carts.find((cart) => cart.product.id === id) ? (
          <button className="border border-black rounded-md px-3 py-1 text-sm bg-black text-white">
            Added
          </button>
        ) : (
          <button className="border border-black rounded-md px-3 py-1 text-sm">
            Add Cart
          </button>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;
