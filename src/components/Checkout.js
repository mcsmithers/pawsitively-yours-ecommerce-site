import React from "react";
import "../styles/Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import { useStateValue } from "../utils/StateProvider";

function Checkout() {
    const [{basket}] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout-left">
                <img src="https://placedog.net/1500/500" alt="Banner" className="checkout-banner" />
                <div>
                    <h2 className="checkout-title">
                        Your Shopping Basket
                    </h2>
                    {basket.map(item => 
                    <>
                    <CheckoutProduct 
                    id= {item.id}
                    title = {item.title}
                    image = {item.image}
                    price = {item.price}
                    rating={item.rating}
                    />
                    </>)}
                </div>
            </div>

            <div className="checkout-right">
                <Subtotal />
            </div>
        </div>
    );
}

export default Checkout;
