import React from "react";
import Container from "./Container";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className=" text-white mt-auto">
      <Container>
        <div className="text-center bg-black py-4">
          @{year}{" "}
          <a
            href="mailto:lumberjack.jack0@gmail.com"
            className="underline text-white hover:text-gray-300"
          >
            YeThiha
          </a>
          . All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
