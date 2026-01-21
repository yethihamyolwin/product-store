import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="px-5 bg-black text-white mx-5 text-center py-2">
      @{year}{" "}
      <a
        href="www.lumberjack.jack0@gmail.com"
        className="underline text-gray-300"
      >
        YeThiha
      </a>
      . All rights reserved.
    </footer>
  );
};

export default Footer;
