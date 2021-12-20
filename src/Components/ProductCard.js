import React, { useContext } from "react";
import "./ProductCart.css";
import formatCurrency from "format-currency";
import Rating from "./Rating";
import CartContext from "../context/cart/CartContext";
export const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  let opts = { format: "%s%v", symbol: "€" };
  return (
    <div className="productCard__wrapper">
      <div>
        <img src={product.image} alt="" className="productCard__img" />
        <h4>{product.name}</h4>
        <div className="productCard__price">
          <h5>{formatCurrency(`${product.price}`, opts)}</h5>
        </div>
        <div className="ProductCard__Rateing">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </div>
        <button
          onClick={() => addToCart(product)}
          className="ProductCard__button"
        >
          Add To Basket
        </button>
      </div>
    </div>
  );
};
