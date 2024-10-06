import React from 'react';
import './Home.css'; // Import CSS

const Home = () => {
    return (
        <section id="hero" class="hero-section"> 
            <div class="hero-content"> 
                <h1>Unlock the Power of Web Development</h1>
                <p>Explore how mastering web development can transform your business and career.</p>
                <a href="#about" class="cta-button">Learn More</a>
            </div>
        </section>
    );
};

export default Home;