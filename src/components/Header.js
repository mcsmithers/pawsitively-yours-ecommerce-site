import React from "react";
import "../styles/Header.css";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import LoginIcon from "@mui/icons-material/Login";
import StoreIcon from "@mui/icons-material/Store";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <Link to="/" style={{ textDecoration: "none" }}>
                <div className="header-logo">
                    <StoreIcon className="header-logo-icon" fontSize="large" />
                    <h2 className="header-logo-title">Pawsitively Yours eShop</h2>
                </div>
            </Link>
            <div className="header-searchbar">
                <input className="header-search-input" />
                <SearchIcon className="header-search-icon" />
            </div>
            <div className="header-nav">
                <div className="nav-item">
                    <span className="nav-item-greeting">Hello, Pawesome Friend!</span>
                    <span className="nav-item-signin"><LoginIcon className="login" /></span>
                </div>
                <div className="nav-item">
                    <span className="nav-item-name-shop">Your</span>
                    <span className="nav-item-shop">Shop</span>
                </div>
                <div className="nav-item">
                    <Link to="/checkout" style={{ textDoration: "none" }}>
                        <span className="nav-item-basket"><ShoppingBasketIcon className="item-basket" /></span>
                        <span className="nav-item-basket-items basket-count">0</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header;