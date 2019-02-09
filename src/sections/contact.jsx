import React from 'react';

export const Contact = (props) => {
    return (
        <section id="contact" class="contact-page-area section-gap">
            <h1 style={{ textAlign: "center", marginBottom: "2em" }}>
                Contact Us
        </h1>
            <div class="container">
                <div class="row" style={{ marginBottom: 50 }}>
                    <div class="col-lg-4 d-flex flex-column address-wrap">
                        <div class="single-contact-address d-flex flex-row">
                            <img style={{
                                width: 'auto',
                                height: '25rem'
                            }} className="img-fluid" src="img/qr-code.jpeg" />
                        </div>
                        <div className="row"><p style={{ margin: '0 auto' }}>WeChat ID: feeltibet</p>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <form class="form-area contact-form text-right" id="myForm" action="https://formspree.io/feeltibettour@yahoo.com" method="POST">
                            <div class="row">
                                <div class="col-lg-12 form-group">
                                    <input name="name" placeholder="Enter your name" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your name'" class="common-input mb-20 form-control" required="" type="text"></input>

                                    <input name="_replyto" placeholder="Enter email address" pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter email address'" class="common-input mb-20 form-control" required="" type="email"></input>
                                </div>
                                <div class="col-lg-12 form-group">
                                    <textarea class="common-textarea form-control" name="message" placeholder="Enter Messege" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Messege'" required=""></textarea>
                                </div>
                                <div class="col-lg-12">
                                    <div class="alert-msg" style={{ textAlign: 'left' }}></div>
                                    <input class="genric-btn primary" style={{ float: 'right' }} type="submit" value="Send Message"></input>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4 d-flex flex-column address-wrap text-center">
                        <h2>Address</h2>
                        <p>Chimey Dolkar <br />
                            Dosam sanglam chego 18<br />
                            Beijing East road <br />
                            850000 <br />
                            Phone 13618913433, 15089020597</p>
                    </div>
                    <div class="col-lg-4 d-flex flex-column address-wrap text-center">

                        <div style={{
    margin: '0 auto'}} class="elfsight-app-064ea279-8c41-4c3f-9b36-d353218d4c5a"></div>
                    </div>
                    <div class="col-lg-4 d-flex flex-column address-wrap text-center">
                        <h2>Skype</h2>
                        <p>id: gonpoyonden</p>
                    </div>
                </div>
            </div>
        </section >)
}