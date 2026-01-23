import React from "react";
import Container from "./Container";

const Header = () => {
  return (
    <header className="px-5 py-5">
      <Container>
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Online Shop</h1>
          <button className="relative border border-black px-6 py-2 rounded-md hover:bg-gray-50 transition-colors">
            My Cart
            {/* Notification Badge */}
            <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white ring-2 ring-white">
              1
            </span>
          </button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
