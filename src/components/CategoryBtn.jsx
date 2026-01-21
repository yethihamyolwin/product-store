import React from "react";

const CategoryBtn = ({ categoryName, current }) => {
  return (
    <button
      className={`${current ? "bg-black text-white" : ""} border border-black px-4 py-2 me-2 rounded-md text-nowrap`}
    >
      {categoryName}
    </button>
  );
};

export default CategoryBtn;
