import React from 'react';

export const Header = (props) => {
    return (
        <header id="header">
            <div className="header-top">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-sm-6 col-6 header-top-left">
                            <ul>
                                <li><a href="#">Visit Us</a></li>
                                <li><a href="#">Buy Tickets</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-6 header-top-right">
                            <div className="header-social">
                                <a href="#"><i className="fab fa-facebook"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-dribbble"></i></a>
                                <a href="#"><i className="fab fa-behance"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container main-menu">
                <div className="row align-items-center justify-content-between d-flex">
                    <div id="logo">
                        <h1 style={{color: 'white'}}>Feel Tibet Tour</h1>
                    </div>
                    <nav id="nav-menu-container">
                        <ul className="nav-menu">
                            <li><a href="#">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}