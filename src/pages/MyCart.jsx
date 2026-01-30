import React from "react";
import Container from "../components/Container";
import Breadcrumb from "../components/Breadcrumb";

const MyCart = () => {
  return (
    <section id="my-cart" className="p-5">
      <Container>  
        <Breadcrumb currentPageTitle="My Cart" />
      </Container>
    </section>
  );
};

export default MyCart;
