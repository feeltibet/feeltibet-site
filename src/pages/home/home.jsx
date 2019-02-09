import React, { Component } from 'react';
import { HomeSection } from '../../sections/banner';
import { Header } from '../../sections/header';
import { About } from '../../sections/about';
import { Contact } from '../../sections/contact';
import { Tours } from '../../sections/tours';
import { HowToTravel } from '../../sections/howToTravel';

export class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <HomeSection />
                <About />
                <Tours />
                <HowToTravel />
                <Contact />
            </div>
        )
    }
}