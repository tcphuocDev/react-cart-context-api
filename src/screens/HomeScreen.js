import React from "react";
import { ProductCard } from "../Components/ProductCard";
import products from "../data";
import "./HomeScreen.css";
export const HomeScreen = () => {
  return (
    <div className="products__wrapper">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
