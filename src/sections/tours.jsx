import React from 'react';

export const Tours = () => {

    return (
        <section class="post-content-area"
            style={{
                background: '#f7f7f7'
            }}
        >
            <h1 style={{ textAlign: "center", marginBottom: "2em", paddingTop: "2em" }}>
                Tours
            </h1>
            <div class="container">
                <div class="row">
                    <div class="col-lg-2"></div>
                    <div class="col-lg-8 posts-list text-center">
                        <div class="single-post row">
                            <div class="col-lg-12 col-md-12 ">
                                <div class="feature-img">
                                    <img class="img-fluid" src="img/tour-1.jpg" alt="" />
                                </div>
                                <a class="posts-title" href="blog-single.html"><h3>1. Location: Lhasa</h3></a>
                                <p class="excert">
                                    A 4 days trip.
									</p>
                                <p>ITINERARY </p>
                                <p>Day 1: pick up from train or flight and drop to hotel </p>
                                <p>Day 2: morning visit Jokang temple in the  afternoon sera monastery </p>
                                <p>Day 3: three visit potala palace and Norbulingka   in afternoon.</p>
                                <a class="btn genric-btn primary" data-toggle="modal" data-target="#exampleModal" style={{ color: "white" }}>READ FULL ITINERARY</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-2"></div>
                </div>
            </div>
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Lhasa: 4 days</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <h2>Day 1</h2>
                            <h3>Lhasa arrival [3650m]</h3>

                            <p>Upon arrival in Lhasa you will be welcomed by your English-speaking Tibetan Guide and Tibetan Driver who will bring you to your hotel. Acclimatization to high altitude: please, drink lots of water and take plenty of rest in order to minimize altitude sickness.</p>

                            <p>Overnight at tibetan hotel </p>
                            <h2>Day 2</h2>
                            <h3>Lhasa sightseeing</h3>

                            <p>We begin visiting Jokhang Temple, the most sacred monastery in Tibet. It was founded in the 7th century by the 33rd great Buddhist king Songtsen Gampo. Later you can explore the surrounding Barkhor old quarter and spend time walking around Jokhang Temple following pilgrims from all over the Tibetan plateau. In the afternoon we go to Sera Monastery, one of three great universities of Gelugpa Sect. We will attend the debating session of the monks.</p>

                            <p>Overnight at Tibetan Hotel </p>

                            <h2>Day 3</h2>
                            <h3>Lhasa sightseeing</h3>

                            <p>Today we visit the beautiful Potala and Norbulingka Palaces. Potala winter palace was built in the 17th century by the fifth Dalai Lama. Provides amazing views of the entire city and houses the private quarters of the Dalai Lama, numerous grand state rooms and chapels. Norbulingka Palace is the summer palace of the Dalai Lama, built in the 18th century by the seventh Dalai Lama. It&rsquo;s tradition to do picnic in its beatiful garden and perform opera dances during Shoton Festival (August-September).</p>

                            <p>Overnight at Tibetan Hotel </p>

                            <h2>Day 4</h2>
                            <h3>Tibet departure</h3>

                            <p>Enjoy your last hours in Tibet exploring Lhasa by your own until your guide and driver meet you at the hotel to transfer you to the airport.</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" data-dismiss="modal" class="btn btn-primary">Ok</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}