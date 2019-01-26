import React from 'react';

export const Contact = (props) => {
    return (
        <section id="contact" class="contact-page-area section-gap">
            <h1 style={{ textAlign: "center", marginBottom: "2em" }}>
                Contact Us
        </h1>
            <div class="container">
                <div class="row">{/* 
                    <div class="map-wrap" style={{ width: '100%', height: 445 }} id="map"></div> */}
                    <div class="col-lg-4 d-flex flex-column address-wrap">
                        <div class="single-contact-address d-flex flex-row">
                            <img style={{
                                width: 'auto',
                                height: '25rem'
                            }} className="img-fluid" src="img/qr-code.jpeg" />
                        </div>
                        <div className="row"><p style={{margin:'0 auto'}}>WeChat ID: feeltibet</p>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <form class="form-area contact-form text-right" id="myForm" action="mail.php" method="post">
                            <div class="row">
                                <div class="col-lg-6 form-group">
                                    <input name="name" placeholder="Enter your name" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your name'" class="common-input mb-20 form-control" required="" type="text"></input>

                                    <input name="email" placeholder="Enter email address" pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter email address'" class="common-input mb-20 form-control" required="" type="email"></input>

                                    <input name="subject" placeholder="Enter subject" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter subject'" class="common-input mb-20 form-control" required="" type="text"></input>
                                </div>
                                <div class="col-lg-6 form-group">
                                    <textarea class="common-textarea form-control" name="message" placeholder="Enter Messege" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Messege'" required=""></textarea>
                                </div>
                                <div class="col-lg-12">
                                    <div class="alert-msg" style={{ textAlign: 'left' }}></div>
                                    <button class="genric-btn primary" style={{ float: 'right' }}>Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>)
}