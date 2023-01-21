import React from 'react';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { TfiGoogle } from 'react-icons/tfi';

const Footer = () => {
    return (
        <div className=' bg-neutral'>
            <footer className="container mx-auto flex lg:flex-row flex-col items-center px-5 lg:px-0 justify-center lg:gap-52 py-10 footer text-neutral-content">
            <div className='lg:w-60 justify-items-center lg:justify-items-start text-center lg:text-left'>
                <p className="text-2xl text-black font-semibold ">About Company</p> 
                <p className='text-xl lg:text-sm'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </div> 
            <div className=' justify-items-center lg:justify-items-start text-xl lg:text-sm'>
                <span className="text-2xl text-black font-semibold">Quick Links</span> 
                <a className="link link-hover">Home</a>
                <a className="link link-hover">Product</a>
                <a className="link link-hover">Pricing</a>
                <a className="link link-hover">Contact</a>
            </div> 
            <div className='justify-items-center lg:justify-items-start text-xl lg:text-sm'>
                <span className="text-2xl text-black font-semibold">Contact Us</span> 
                <a className="">info@company.com</a>
                <a className="">+91 079 00000000</a>
                <p className='flex gap-5 text-2xl'><FaFacebookF/> <FaTwitter/><TfiGoogle/></p>
            </div>
            </footer>
        </div>
    );
};

export default Footer;