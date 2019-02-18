import React from 'react';
import { Card } from '../components/cards/card';
import { Cards } from '../components/cards/cards';
import { Tour1 } from './singleTours/tour1';
import { Tour2 } from './singleTours/tour2';
import { Tour3 } from './singleTours/tour3';
import { Tour4 } from './singleTours/tour4';
import { Tour5 } from './singleTours/tour5';

export const Tours = () => {

    return (
        <section id="tours" class="post-content-area"
            style={{
                background: '#f7f7f7'
            }}
        >
            <h1 style={{ textAlign: "center", marginBottom: "2em", paddingTop: "2em" }}>
                Tours
            </h1>
            <div style={{paddingBottom: '3rem'}}>
                <Cards>
                    <Card
                        title="Lhasa 4 days"
                        buttonLabel="READ FULL ITINERARY"
                        img="img/tour-1.jpg"
                        description="We begin visiting Jokhang Temple, the most sacred monastery in Tibet. It was founded in the 7th century by the 33rd great Buddhist king Songtsen Gampo..."
                        modal="#lhasa"
                    />
                    <Card
                        title="8 days tour to EBC"
                        buttonLabel="READ FULL ITINERARY"
                        img="img/tour-2-body-1.jpg"
                        description="This trip is one of the most popular adventure tours in the world as its visitors cross the mighty Himalayas and view the panorama of the world’s highest peaks..."
                        modal="#lhasa8days"
                    />
                    <Card
                        title="9 Days tour Lhasa, EBC and Namtos lake"
                        buttonLabel="READ FULL ITINERARY"
                        img="img/tour-3.jpg"
                        description="A 9 days trip. Day 1 Arrival in Lhasa (3650m) Pick up and transfer to hotel, rest at hotel. Hotel in Lhasa. Day 2 Lhasa sightseeing Bakhor street, Johkang..."
                        modal="#lhasa9days"
                    />
                    <Card
                        title="15 days Mt. Kailash Tour"
                        buttonLabel="READ FULL ITINERARY"
                        img="img/tour-4-2.jpeg"
                        description="A 15 days trip. Day 1 Arrival in Lhasa (3650m) Pick up and transfer to hotel, rest at hotel. Hotel in Lhasa. Day 2 Lhasa sightseeing Bakhor street, Johkang..."
                        modal="#lhasa15days"
                    />
                    <Card
                        title="Spiritual Tour"
                        buttonLabel="READ FULL ITINERARY"
                        img="img/spiritual2.jpg"
                        description="A 7 days trip. Today on the way from Lhasa to Namtso lake, you will see different landscape with great views, and you will see the Mt. Nyenchen Tangla..."
                        modal="#spiritualtour"
                    />
                </Cards>
            </div>
            <Tour1 />
            <Tour2 />
            <Tour3 />
            <Tour4 />
            <Tour5 />
        </section >
    )
}