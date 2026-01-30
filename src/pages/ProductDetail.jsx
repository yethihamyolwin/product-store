import React from "react";
import { useParams } from "react-router";
import products from "../data/products";
import Container from "../components/Container";
import Rating from "../components/Rating";
import Breadcrumb from "../components/Breadcrumb";

const ProductDetail = () => {
  const { productId } = useParams();

  const currentProduct = products.find((product) => product.id == productId);

  return (
    <section id="product-detail" className="p-5">
      <Container>
        <Breadcrumb currentPageTitle="Product Detail" />
        <div className="border border-black p-5 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="col-span-1">
              <img
                src={currentProduct.image}
                alt={currentProduct.title}
                className=" w-full max-h-60 md:max-h-80 object-contain block mx-auto"
              />
            </div>
            <div className="col-span-1 flex flex-col items-start gap-3 md:gap-5">
              <h3 className="text-xl md:text-2xl font-bold line-clamp-2">
                {currentProduct.title}
              </h3>
              <p className="bg-gray-200 text-gray-700 text-sm md:text-base inline-block px-5 py-1 mt-2">
                {currentProduct.category}
              </p>
              <p>{currentProduct.description}</p>
              <Rating rate={currentProduct.rating.rate} />
              <div className="flex justify-between items-end w-full">
                <p className="text-lg font-semibold">
                  Price (${currentProduct.price})
                </p>
                <button className="border border-black rounded-md px-3 py-1 text-sm">
                  Add Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProductDetail;
