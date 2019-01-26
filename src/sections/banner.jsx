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
                        <a href="#about" className="primary-btn text-uppercase">Get Started</a>
                    </div>
                    <div className="col-lg-4 col-md-6 banner-right">
                       {/*  <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="flight-tab" data-toggle="tab" href="#flight" role="tab" aria-controls="flight" aria-selected="true">Some Info</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="hotel-tab" data-toggle="tab" href="#hotel" role="tab" aria-controls="hotel" aria-selected="false">Where</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="holiday-tab" data-toggle="tab" href="#holiday" role="tab" aria-controls="holiday" aria-selected="false">More info</a>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="flight" role="tabpanel" aria-labelledby="flight-tab">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nullam tristique, tortor et fringilla luctus,
                                diam magna tincidunt enim, id venenatis sem justo quis justo.
                                Integer a vulputate libero, a placerat libero. Nunc dignissim


                            </div>
                            <div className="tab-pane fade" id="hotel" role="tabpanel" aria-labelledby="hotel-tab">
                                dolor sit amet velit consectetur, ut consequat odio fringilla. Phasellus id nisi in
                                    quam ultricies blandit eu at nisi. Maecenas placerat suscipit dictum. Pellentesque vitae
                                    suscipit lorem. Aenean egestas odio est, eu imperdiet libero suscipit et. Etiam sit amet
                                    pellentesque turpis, eget tempor est.
                            </div>
                            <div className="tab-pane fade" id="holiday" role="tabpanel" aria-labelledby="holiday-tab">
                                Nullam quam enim, maximus quis risus non, scelerisque fringilla purus.
                                    Integer tincidunt augue vel urna placerat, rhoncus eleifend ante viverra.
                                    Donec vehicula nisi at lectus pharetra dictum. Maecenas dictum molestie malesuada.
                                    Cras porta gravida elit nec pretium. Etiam dapibus mi nec nisl viverra euismod et vitae urna.
                                    Pellentesque a erat quis turpis ullamcorper convallis. Vestibulum id nibh aliquet, lacinia libero a,
                                    mattis erat. Fusce id volutpat nisi. Donec massa tortor, faucibus in accumsan euismod, consequat ac felis.
                            </div>
                        </div> */}
                        <img className="img-fluid" src="img/logo-t.png" />
                    </div>
                </div>
            </div>
        </section>
    )
}