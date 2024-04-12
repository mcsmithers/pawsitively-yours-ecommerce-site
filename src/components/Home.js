import React from "react";
import "../styles/Home.css"
import Product from "./Product"

function Home() {
    return (
        <div>
            <div className="home">
                <div className="home-container">
                    <img className="home-image" src="https://placedog.net/1500/278" alt="Home" />

                    <div className="home-row">
                        <Product
                            id="456456"
                            title="Check-In Session for Dogs - Basic"
                            price={18.99}
                            rating={3}
                            image="https://placedog.net/400/200?id=3"
                        />
                        <Product
                            id="456457"
                            title="Dog Adventure - Premium"
                            price={18.99}
                            rating={5}
                            image="https://placedog.net/400/200?id=1"
                        />
                    </div>

                    <div className="home-row">
                        <Product
                            id="456458"
                            title="Check In Session for Dogs - Premium"
                            price={25.99}
                            rating={5}
                            image="https://placedog.net/400/200?id=2"
                        />
                        <Product
                            id="456459"
                            title="Check-In Session for Cats - Basic"
                            price={15.99}
                            rating={3}
                            image="https://placedog.net/400/200?id=4"
                        />
                        <Product
                            id="456460"
                            title="Check-In Session for Cats - Premium"
                            price={24.99}
                            rating={4}
                            image="https://placedog.net/400/200?id=5"
                        />
                    </div>


                    <div className="home-row">
                        <Product
                            id="546445"
                            title="Check-In Session for Exotic Pets - Premium"
                            rating={5}
                            price={29.99}
                            image="https://placedog.net/400/200?id=7"
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home;