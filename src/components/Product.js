import React from "react";
import "../styles/Product.css";

function Product({ id, title, image, price, rating }) {

    return (
        <div className="product">
            <div className="product-info">
                <p>{title}</p>
                <p className="product-price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product-rating">
                    {Array(rating).fill().map((_, item) => (
                        <p>⭐</p>
                    ))}
                </div>
            </div>

            <img src={image} alt="Product" />

            <button >Add to Basket</button>
        </div>
    )
}

export default Product
