import React from 'react';

const ContactUs = () => {
    return (
        <div className='bg-primary h-44 flex flex-col items-center justify-center'>
            <div className='container mx-auto h-20 flex items-center justify-center gap-5'>
                <input type="text" placeholder="Type here" className="input input-bordered border-white text-white bg-transparent lg:w-full lg:h-16 max-w-md placeholder:text-white" />
                <button className="btn lg:btn-lg rounded-lg btn-neutral hover:btn-outline  bg-white text-primary">Subscribe</button>
            </div>
            
        </div>
    );
};

export default ContactUs;