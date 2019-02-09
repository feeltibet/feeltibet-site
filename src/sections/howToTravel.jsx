import React from 'react';

export const HowToTravel = () => {
    return (
        <section id="howtotravel" class="contact-page-area section-gap" style={{ background: "url('../img/tour-4-4.jpg')", backgroundSize: 'cover'  }}>
            <h1 style={{color: 'white', textAlign: "center", marginBottom: "0.5em" }}>
                How to Travel </h1>
            <center style={{color: 'black', textAlign: "center", marginBottom: "2rem", textShadow: '9px black' }}><p>You have following three options how to enter Tibet:</p></center>
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
    )
}