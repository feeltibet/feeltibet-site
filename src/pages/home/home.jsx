import React, { Component } from 'react';
import { HomeSection } from '../../sections/banner';
import { Header } from '../../sections/header';
import { About } from '../../sections/about';
import { Contact } from '../../sections/contact';
import { Tours } from '../../sections/tours';

export class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <HomeSection />
                <About />
                <Tours />
                <Contact />
            </div>
        )
    }
}