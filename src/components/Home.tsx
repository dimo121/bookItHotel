import React from 'react';
import img1 from '../assets/2_v69.webp';
import img2 from '../assets/3_v26.webp';
import img3 from '../assets/4_v23.webp';
import img4 from '../assets/6_v51.webp';

import './Home.css';


export class Home extends React.Component{



    render(){
        return(
            <div className='page-container'>
                
                <div className='grid-container'>
                    <div style={{gridArea:'a'}}>
                        <h3>BookIt’s global hotel search</h3>
                        <p>BookIt’s hotel search allows users to compare hotel prices in just a few clicks from more than 300 booking sites for more than 5.0 million hotels and other types of accommodation in over 190 countries. We help millions of travelers each year compare deals for hotels and accommodations. Get information for weekend trips to cities like Sydney or Melbourne and you can find the right hotel on BookIt quickly and easily. Brisbane and its surrounding area are great for trips that are a week or longer with the numerous hotels available. </p>
                    </div>
                    <img src={img1} alt='' style={{ gridArea:'b'}} />
                    <img src={img2} alt='' style={{ gridArea:'c'}} />
                    <div style={{gridArea:'d'}}>
                        <h3>Find cheap hotels on BookItHotel</h3>
                        <p>With BookIt you can easily find your ideal hotel and compare prices from different websites. Simply enter where you want to go and your desired travel dates, and let our hotel search engine compare accommodation prices for you. To refine your search results, simply filter by price, distance (e.g. from the beach), star category, facilities and more. From budget hostels to luxury suites, BookIt makes it easy to book online. You can search from a large variety of rooms and locations across Australia, like Gold Coast and Adelaide to popular cities and holiday destinations abroad like London and New York City!</p>
                    </div>
                    <div style={{gridArea:'e'}}>
                        <h3>Hotel reviews help you find your ideal hotel</h3>
                        <p>Over 175 million aggregated hotel ratings and more than 19 million images allow you to find out more about where you're travelling. To get an extended overview of a hotel property, BookIt shows the average rating and extensive reviews from other booking sites, e.g. Hotels.com, Expedia, Agoda, leading hotels, etc. BookIt makes it easy for you to find information about your weekend trip to Perth, including the ideal hotel for you.</p>
                    </div>
                    <img src={img3} alt='' style={{ gridArea:'f'}} />
                    <img src={img4} alt='' style={{ gridArea:'g'}} />
                    <div style={{gridArea:'h'}}>
                        <h3>How to book</h3>
                        <p> BookIt is a hotel search with an extensive price comparison. The prices shown come from numerous hotels and booking websites. This means that while users decide on BookIt which hotel best suits their needs, the booking process itself is completed through the booking sites (which are linked to our website). By clicking on the “view deal” button, you will be forwarded onto a booking site where you can complete the reservation for the hotel deal found on BookIt.
                            Let BookIt will help you to find the right price from over 300 booking sites!</p>
                    </div>
                </div>
            </div>
        )
    }
}

//<h2>Welcome to the Home page.</h2>