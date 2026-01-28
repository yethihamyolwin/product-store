import React from "react";
import { Link } from "react-router";

const Breadcrumb = ({ currentPageTitle }) => {
  return (
    <nav className="flex mb-5 text-sm" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        <li>
          <Link to="/" className="text-gray-500 hover:text-black">
            Home
          </Link>
        </li>

        <li className="flex items-center space-x-2">
          <span className="text-gray-400">/</span>
          <span className="font-bold text-black truncate max-w-37.5 md:max-w-none">
            {currentPageTitle}
          </span>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
