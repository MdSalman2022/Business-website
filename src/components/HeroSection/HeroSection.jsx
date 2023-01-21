import React from 'react';

const HeroSection = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/0fHhrWV/deal.jpg")` }}>
                <div className="hero-overlay bg-primary bg-opacity-70"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-full text-white">
                    <h1 className="mb-5 text-4xl lg:text-7xl font-bold">WE HELP YOUR BUSINESS</h1>
                    <p className="mb-5 text-xl">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    <button className="btn-lg btn-neutral hover:btn-outline rounded-lg bg-neutral text-black">LEARN MORE</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;