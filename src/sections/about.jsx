import React from 'react';

export const About = (props) => {
    return (
        <section id="about" class="home-about-area">
            <div class="container-fluid">
                <div class="row align-items-center justify-content-end">
                    <div class="col-lg-6 col-md-12 home-about-left">
                        <h1>About Us</h1>
                        <p>Feel Tibet Tour is run by a group of local Tibetan.
                        We are all authentic tibetan natives, and we have been working with
                        tour guiding through the most diversified Tibetan spots for more than
                        10 years. We have a great understanding about the requirements of our
                        clients regarding the tours options, offering the best tailor-made tours,
                        based on your wish of adventure and spiritual experience.</p>
                    </div>
                    <div class="col-lg-6 col-md-12 home-about-right no-padding">
                        <img class="img-fluid" src="img/about-img.jpg" alt=""></img>
                    </div>
                </div>
            </div>
        </section>
    )
}