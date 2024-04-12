import React from "react";
import "../styles/Home.css"
import Product from "./Product"

function Home () {
    return (
        <div>
            <div className="home">
                <div className="home-container">
                    <img className="home-image" src="https://placedog.net/1500/278" alt="Home" />

                    <div className="home-row">
                        <Product />
                        <Product />
                    </div>


                    <div className="home-row">
                        <Product />
                        <Product />
                        <Product />
                    </div>


                    <div className="home-row">
                        <Product />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home;