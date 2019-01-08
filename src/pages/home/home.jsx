import React, { Component } from 'react';
import { HomeSection } from '../../sections/banner';
import { Header } from '../../sections/header';
import { About } from '../../sections/about';

export class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <HomeSection />
                <About />
            </div>
        )
    }
}