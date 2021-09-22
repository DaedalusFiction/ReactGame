import React from 'react';
import { useState } from 'react';
import '../index.css';
import '../mediaqueries.css';
import Amp from '../images/amp-photo.png';
import Image from './Image';
import Button from './Button';
import ContactForm from './ContactForm';


const App = () => {
    const [dropdown, toggleVisible ] = useState(false);
    
    const toggleDropdown = () => {
        toggleVisible(!dropdown)
    }
    return (
        <>
            <section className="hero" id="top">
              <div className="flex container">
                <a href="https://www.therecursions.com" target="_blank" rel="noreferrer"><em>The Recursions</em></a>
              </div>
            </section>
            
            <section className="about">
              <div className="container">
                <h2>Who Are We</h2>
                <div className="flex">
                  <Image image={Amp} alt="Ibanez amp with white electric guitar" />
                  <p><strong>The Recursions</strong> is the world's only <em>recursive</em> cover band (meaning that each song we play is technically a cover of the last time we played it). Located in the heart of central Virginia, we are available for weddings, birthdays, bar/bat mitzvas, graduations, and petting zoos, but not conservative rallies or corporate events.</p>
                </div>
                <Button className="btn" text="Request a Gig" onclick={toggleDropdown} />
            
                {dropdown && <ContactForm />}
            
            
              </div>
            </section>
            
            <div className="footer">
              <div className="flex">
                <li><a href="https://www.therecursions.com" target="_blank" rel="noreferrer">THE RECURSIONS ~ SINCE 2021</a></li>
                <ul>
                  <li><a href="#top">PRIVACY POLICY</a></li>
                  <li><a href="#top">SEND FEEDBACK</a></li>
                </ul>
              </div>
            </div>
        </>

    )
}



export default App
