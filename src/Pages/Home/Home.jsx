import React from 'react';
import AboutUs from '../../components/AboutUs/AboutUs';
import ContactUs from '../../components/ContactUs/ContactUs';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import HeroSection from '../../components/HeroSection/HeroSection';
import Testimonial from '../../components/Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Header />
            <HeroSection />
            <AboutUs />
            <Testimonial />
            <ContactUs />
            <Footer />
        </div>
    );
};

export default Home;