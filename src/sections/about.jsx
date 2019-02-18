import React from 'react';
import { Modal } from '../components/modal/modal';
import { ModalFood } from './modalFood';
import { TibetanCulture } from './tibetanCulture';
import { Festivals } from './festivals';

export const About = (props) => {
    return (
        <div>
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
            <section id="why" class="home-about-area">
                <div class="container-fluid">
                    <div class="row align-items-center justify-content-end">
                        <div class="col-lg-6 col-md-12 home-about-right no-padding">
                            <img class="img-fluid" src="img/about-img__2.jpg" alt=""></img>
                        </div>
                        <div class="col-lg-6 col-md-12 home-about-left">
                            <h1>Why Us?</h1>
                            <p>Our tour guides knowledge about Tibetan places, people and culture is excelent,
                                as they were born in Tibet.
                                All of our Tibetan tour guides can speak English,
                                 Chinese and Tibetan. They have experience in guiding tours,
                                 high-altitude trekking, and are skilled in Tibetan Buddhism and history.
                                 They hail from every region of Tibet, and are confidentially familiar with the lands,
                                 people, and its stories.
                                </p>
                            <p>Feel Tibet Tour provides the best tour plans in Tibet with our deep knowledge
                                about this wonderful place. We are one of the most reliable Tibet travel agency
                                working to the best of our ability to serve our clients with a highly valued tour with an
                                affordable price We arrange Tibet tour and Tibet travel journey to all the regions in Tibet
                                Autonomous Region. Our company is situated in Lhasa, and with our special customer
                                service we have won many customers' trust due to our hospitality, letting them obtain the
                                 best memories from their personalized Tibetan tour. We have a team of reliable and
                                 experienced travel agents to serve Tibet lovers with professionalism. Our whole staff
                                 can speak English, Chinese and Tibetan. </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="founder" class="home-about-area">
                <div class="container-fluid">
                    <div class="row align-items-center justify-content-end">
                        <div class="col-lg-6 col-md-12 home-about-left">
                            <h1>Message from Founder</h1>
                            <p>My name is Chimey Dolkar, I was born in Eastern
                                Tibet, and grew up in Lhasa. I have been a tour
                                guide in Lhasa for more than 10 years, and I am the founder of Feel Tibet Tour. </p>
                            <p>In our tour menu, we provide some unique tour itineraries
                                that we have well designed based on the experiences we have from many
                                 years of dealing with different clients who seek for different experiences in
                                  Tibet. Here we have classified these tours in to 4 main categories:
                                  (1) Private Tour, (2) Family Tour, (3) Group Tour, and (4) Food Tour across
                                  Lhasa. We assure you that your trip to Tibet will be truly a memorable one.
                                  Tashi Delek!</p>
                        </div>
                        <div class="col-lg-6 col-md-12 home-about-right no-padding">
                            <img class="img-fluid" src="img/founder-1.jpg" alt=""></img>
                        </div>
                    </div>
                </div>
            </section>

            <section id="food" class="home-about-area">
                <div class="container-fluid">
                    <div class="row align-items-center justify-content-end">
                        <div class="col-lg-6 col-md-12 home-about-right no-padding">
                            <img class="img-fluid" src="img/food/food_cover.jpg" alt=""></img>
                        </div>
                        <div class="col-lg-6 col-md-12 home-about-left">
                            <h1>Tibetan Food</h1>
                            <p>Information on tibet and tibetan Food  Location:
                                The Tibetan Plateau is located in central Asia, bordered by
                                India and Nepal in the southeast; Bhutan in the south; and a number
                                of Chinese provinces in the north and the east. Population: 2.84 million
                                in the Tibet Autonomous Region, 5.5 million in all ethnic Tibetan
                                regions in China Area: 1.2 million sq km in the Tibet Autonomous Region,
                                 2.5 million sq km in all contiguous ethnic Tibetan areas in China
                                 (approximately the size of Western Europe) Average elevation: 4,900m
                                 Terrain: 70% grassland, with forested areas in the lower elevations
                                 and tall mountain ranges at higher elevations Climate: Warm in the summer
                                 (avg. 28C), cold in the winter (-15C), and
                                [...]
                                </p>
                            <a data-toggle="modal" style={{ color: "white", background: '#f8b600', borderRadius: 0, border: 'none' }} data-target="#foodmodal" class="btn btn-primary">Read More</a>
                        </div>
                    </div>
                </div>
                <Modal
                    title="Food"
                    id="foodmodal"
                >
                    <ModalFood />
                </Modal>
            </section>

            <section id="tibetanculture" class="home-about-area">
                <div class="container-fluid">
                    <div class="row align-items-center justify-content-end">
                        <div class="col-lg-6 col-md-12 home-about-left">
                            <h1>Tibetan Culture</h1>
                            <p> Due to Tibet&rsquo;s extreme environment and high altitudes, it has formed its own unique customs over thousands of years. The culture, custom and tradition of Tibet has been set as an example to the world as one of the last remaining authentic cultures in the world. Travelers in Tibet will observe first with Tibetan culture when they visit a family in Tibet. As in Tibetan culture, the hospitality is most respectful cultures in the world. They treat thier guests with the great respect. Tibet&rsquo;s distinctive communal cultures such as etiquette, dress, marriage and burial ceremonies are colorful, unique, and unforgettable. Travelers must visit Tibet during the festivals, so travelers will experience the real authentic Tibet. </p>
                            <a data-toggle="modal" style={{ color: "white", background: '#f8b600', borderRadius: 0, border: 'none' }} data-target="#culturemodal" class="btn btn-primary">Read More</a>
                        </div>
                        <div class="col-lg-6 col-md-12 home-about-right no-padding">
                            <img class="img-fluid" src="img/tibetan_culture.jpg" alt=""></img>
                        </div>
                    </div>
                    <Modal
                        title="Culture"
                        id="culturemodal"
                    >
                        <TibetanCulture />
                    </Modal>
                </div>
            </section>
            <section id="festivals" class="home-about-area">
                <div class="container-fluid">
                    <div class="row align-items-center justify-content-end">
                        <div class="col-lg-6 col-md-12 home-about-right no-padding">
                            <img class="img-fluid" src="img/festivals.jpg" alt=""></img>
                        </div>
                        <div class="col-lg-6 col-md-12 home-about-left">
                            <h1>Tibetan Festivals</h1>
                            <p>Tibetan calendar lags approximately four to six weeks behind the solar calendar. For example , the Tibetan first moth usually falls in February, the fifth month usually falls in June or early July and the Eight month usually falls in September.</p>

                            <p>Losar is the Tibetan word for &ldquo; New Year&rdquo;. Tibetan New Year is a very special festival to celebrate in Tibet and it is also the most-awaited festival for all the Tibetans without any difference in age or gender.</p>

                            <a data-toggle="modal" style={{ color: "white", background: '#f8b600', borderRadius: 0, border: 'none' }} data-target="#festivalsmodal" class="btn btn-primary">Read More</a>


                        </div>
                    </div>

                </div>

                <Modal
                    title="Festivals"
                    id="festivalsmodal"
                >
                    <Festivals />
                </Modal>
            </section>

        </div>

    )
}