import React from "react";
import Container from "../components/Container";
import Breadcrumb from "../components/Breadcrumb";
import CartSection from "../components/CartSection";

const MyCart = () => {
  return (
    <section id="my-cart" className="p-5">
      <Container>
        <Breadcrumb currentPageTitle="My Cart" />
        <CartSection />
      </Container>
    </section>
  );
};

export default MyCart;
