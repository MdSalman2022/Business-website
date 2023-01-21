import React from 'react';
import { AiOutlineStar } from 'react-icons/ai';

const AboutUs = () => {
    return (
        <div className='py-10 bg-neutral space-y-10'>
            <div className='container mx-auto text-center text-accent'>
                <h1 className="text-4xl">OUR PRODUCT</h1>
                <div className="grid lg:grid-cols-3 gap-10 lg:gap-0 mt-10">
                    <div className='flex flex-col items-center justify-center space-y-5'>
                        <AiOutlineStar className='text-neutral text-8xl bg-secondary p-2 rounded-full'/>
                        <p className="text-2xl">SEO</p>
                        <p className='w-72'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                  <div className='flex flex-col items-center justify-center space-y-5'>
                        <AiOutlineStar className='text-neutral text-8xl bg-secondary p-2 rounded-full'/>
                        <p className="text-2xl">BRANDING</p>
                        <p className='w-72'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                   <div className='flex flex-col items-center justify-center space-y-5'>
                        <AiOutlineStar className='text-neutral text-8xl bg-secondary p-2 rounded-full'/>
                        <p className="text-2xl">LOGO</p>
                        <p className='w-72'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                </div>
            </div>
            <div className='bg-base-100 text-black py-20'>
                <div className=" container mx-auto flex flex-col px-5 gap-5 lg:px-0 lg:grid grid-cols-2 place-items-center  justify-items-center  ">
                    <div className='text-left'>
                        <p className="text-3xl">ABOUT US</p>
                        <p className='w-96'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                    <div>
                        <img className='w-80' src="https://i.ibb.co/HrgPGmj/chess.jpg" alt="chess" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AboutUs;