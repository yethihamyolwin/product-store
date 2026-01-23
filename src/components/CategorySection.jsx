import React from "react";
import CategoryBtn from "./CategoryBtn";
import Container from "./Container";

const CategorySection = () => {
  const title = "Product Categories";
  const categories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];
  return (
    <section id="category-section" className="p-5 grow">
      <Container>
        <p className="text-md text-gray-500 mb-2">{title}</p>
        <div className="flex flex-nowrap hide-scrollbar">
          <CategoryBtn categoryName={"all"} current={true} />
          {categories.map((category) => (
            <CategoryBtn
              key={category}
              categoryName={category}
              current={false}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CategorySection;
