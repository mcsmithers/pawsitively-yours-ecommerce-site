import React from "react";
import "../styles/Product.css";

function Product() {

    return (
        <div className="product">
            <div className="product-info">
                <p>Title</p>
                <p className="product-price">
                    <small>$</small>
                    <strong>price</strong>
                </p>
                <div className="product-rating">
                    <p>⭐</p>
                </div>
            </div>

            <img src="https://placedog.net/300/200" />

            <button >Add to Basket</button>
        </div>
    )
}

export default Product
