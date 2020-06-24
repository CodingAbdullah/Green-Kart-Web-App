import React from 'react';
import Navbar from '../Navbar/navbar';
import Jumbotron from '../Jumbotron/jumbotron';
import About from '../About/about';
import Contact from '../Contact/contact';
import Footer from '../Footer/footer';
import Steps from '../Steps/steps';

const Homepage = () => {

    return (
        <div className="homepage">
            <Navbar />
            <Jumbotron />
            <About />
            <Steps />
            <Contact />
            <Footer />
        </div>
    );
}

export default Homepage;