import React from 'react';
import { Modal } from '../components/modal/modal';
import { Permits } from './permits';
export const HowToTravel = () => {
    return (
        <div>
            <section id="howtotravel" class="contact-page-area section-gap" style={{ background: "url('../img/tour-4-4.jpg')", backgroundSize: 'cover' }}>
                <h1 style={{ color: 'white', textAlign: "center", marginBottom: "0.5em" }}>
                    How to Travel </h1>
                <center style={{ color: 'black', textAlign: "center", marginBottom: "2rem", textShadow: '9px black' }}><p>You have following three options how to enter Tibet:</p></center>
                <div style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    display: 'flex',
                    alignContent: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center'
                }}>
                    <div
                        style={{
                            background: 'white',
                            minWidth: "20rem",
                            maxWidth: "20rem",
                            flex: 1,
                            margin: 5,
                            minHeight: '6em',
                            alignContent: 'center',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 10,
                            minHeight: '560px',
                            padding: 20
                        }}
                    >
                        <h3>1. By Plane</h3>
                        <br />
                        <p>There are regular flights to Lhasa from following airports:</p>

                        <p>Chengdu (approx. duration 2 hours)</p>

                        <p>Beijing (approx. duration 5.5 hours)</p>

                        <p>Shanghai (approx. duration 5.5 hours)</p>

                        <p>Kathmandu (approx. duration 1.5 hours)</p>

                        <p>Xi'an (approx. duration 2.5 hours)</p>

                        <p> Xi'Ning (approx. duration 2.5 hours)</p>

                        <p>Shangrila (approx. duration 2 hours)</p>

                        <p>Guangzhou (approx. duration 5.5 hours)</p>

                        <p>Chongqing (approx. duration 2.5 hours)</p>

                        <p>The easiest way to travel to Tibet is by plane from Mainland China or Kathmandu, Nepal.</p>
                    </div>
                    <div
                        style={{
                            background: 'white',
                            minWidth: "20rem",
                            maxWidth: "20rem",
                            flex: 1,
                            margin: 5,
                            minHeight: '6em',
                            alignContent: 'center',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 10,
                            minHeight: '560px',
                            padding: 20
                        }}>
                        <h3>2. By Train</h3>
                        <br />
                        <p> Chongqing (duration 44h58m; distance 3641 km)</p>

                        <p>Chengdu (duration 43h40m; distance 3360 km)</p>

                        <p>Beijing to Lhasa train (duration 43h40m; distance 3753 km)</p>

                        <p>Shanghai to Lhasa train (duration 48h39m; distance 4373 km)</p>

                        <p>Xining to Lhasa train (duration 23h51m; distance 1960 km)</p>

                        <p>Guangzhou to Lhasa (duration 55h01m; distance 4980km)</p>

                        <p>Lanzhou (duration 26h27m; distance 2188 km)</p>
                    </div>

                    <div
                        style={{
                            background: 'white',
                            minWidth: "20rem",
                            maxWidth: "20rem",
                            flex: 1,
                            margin: 5,
                            minHeight: '6em',
                            alignContent: 'center',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 10,
                            minHeight: '560px',
                            padding: 20
                        }}>
                        <h3>3. By Land (Vehicle)</h3>
                        <br />
                        <p> From Nepal </p>

                        <p>By land from Nepal to tibet </p>

                        <p>Keyrong to Lhasa via E.B.C (Shigatse -Gyantse -Yamdrok Lake- Lhasa)</p>
                    </div>
                </div>
            </section>
            <section id="permits" class="home-about-area">
                <div class="container-fluid">
                    <div class="row align-items-center justify-content-end">
                        <div class="col-lg-6 col-md-12 home-about-right no-padding">
                            <img class="img-fluid" src="img/permits.jpg" alt=""></img>
                        </div>
                        <div class="col-lg-6 col-md-12 home-about-left">
                            <h1>Permits to Travel</h1>
                            <p> Tibet Travel Permit is the most essential Tibet Entry Documents needed for all the foreign travelers. Tibet Permit or Tibet visa is like a visa to Tibet. The Tibet Tourism Bureau through a locally based Travel agency like us issues it. With different plans for your entry and visiting Tibet, you will receive various types of documents, which is important to meet the joys of your travel in Tibet.</p>

                            <p>Feel Tibet Tour team would be happy to assist you with the exact information through our online services to our clients. Once your trip to tibet is confirmed with us, travelers need to send us their passport copies in within 3weeks, we will come out with the Tibet Travel Permit. With Tibet permit, which allows the Travelers to enter Tibet and visit Tibet.</p>


                            <a data-toggle="modal" style={{ color: "white", background: '#f8b600', borderRadius: 0, border: 'none' }} data-target="#permitsmodal" class="btn btn-primary">Read More</a>


                        </div>
                    </div>

                </div>

                <Modal
                    title="Festivals"
                    id="permitsmodal"
                >
                    <Permits />
                </Modal>
            </section>
        </div>
    )
}