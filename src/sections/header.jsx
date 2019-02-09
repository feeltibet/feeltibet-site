import React from 'react';

export const Header = (props) => {
    return (
        <header id="header">
            <div className="header-top">
                <div className="container">
                </div>
            </div>
            <div className="container main-menu">
                <div className="row align-items-center justify-content-between d-flex">
                    <div id="logo">
                        <h2 style={{ color: 'white' }}>Feel Tibet Tour</h2>
                    </div>
                    <nav id="nav-menu-container">
                        <ul className="nav-menu">
                            <li><a href="#">Home</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#why">Why Us</a></li>
                            <li><a href="#tours">Tours</a></li>
                            <li><a href="#howtotravel">How to Travel</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}