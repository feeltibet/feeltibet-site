import React from 'react';

export const HomeSection = (props) => {
    return (
        <section className="banner-area relative">
            <div className="overlay overlay-bg"></div>
            <div className="container">
                <div className="row fullscreen align-items-center justify-content-between">
                    <div className="col-lg-6 col-md-6 banner-left">
                        <h6 className="text-white">travel can be as authentic as you.</h6>
                        <h1 className="text-white">Feel Tibet Tour</h1>
                        <p className="text-white">
                            If you want to have a real experience with real people, you are in the right place.
							</p>
                        <a href="#" className="primary-btn text-uppercase">Get Started</a>
                    </div>
                    <div className="col-lg-4 col-md-6 banner-right">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="flight-tab" data-toggle="tab" href="#flight" role="tab" aria-controls="flight" aria-selected="true">Flights</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="hotel-tab" data-toggle="tab" href="#hotel" role="tab" aria-controls="hotel" aria-selected="false">Hotels</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="holiday-tab" data-toggle="tab" href="#holiday" role="tab" aria-controls="holiday" aria-selected="false">Holidays</a>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="flight" role="tabpanel" aria-labelledby="flight-tab">
                                <span>opaopa</span>
                            </div>
                            <div className="tab-pane fade" id="hotel" role="tabpanel" aria-labelledby="hotel-tab">
                                <span>opaopa</span>
                            </div>
                            <div className="tab-pane fade" id="holiday" role="tabpanel" aria-labelledby="holiday-tab">
                                <span>opaopa</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}