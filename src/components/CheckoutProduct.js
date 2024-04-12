import React from "react";
import "../styles/CheckoutProduct.css";
import { useStateValue } from "../utils/StateProvider";

function CheckoutProduct({ id, image, title, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })
    }
    return (
        <div className="checkout-product">
            <img src={image} className="checkout-product-image" alt="Product" />
            <div className="checkout-product-info">
                <p>{title}</p>
                <p className="checkout-product-price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkout-product-rating">
                    {Array(rating).fill().map((_, index) => (
                        <p key={index}>⭐</p>
                    ))}
                </div>
            </div>

            <img src={image} alt="Product" />

            <button onClick={removeFromBasket} >Remove From Basket</button>
        </div>
    )
}

export default CheckoutProduct;