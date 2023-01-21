import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/swiper.min.css"; 
import 'swiper/css';
import "swiper/css/navigation";

const Testimonial = () => {
    return (
        <div className='bg-white '>
            <div className='container mx-auto  text-black text-center lg:px-44 lg:p-5 lg:py-20 '>
            <Swiper
                 style={{
                            "--swiper-navigation-color": "bg-primary",
                        }}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper py-10 lg:py-0"
            >
                <SwiperSlide>
                    <div className="flex justify-center items-center gap-5 lg:gap-10">
                        <div className="avatar">
                            <div className="w-20 lg:w-40 rounded-full">
                                <img src="https://i.ibb.co/dtr0NNy/screen-shot-2018-10-08-at-6-04-09-pm.png" alt='sundar pichai' />
                            </div>
                        </div>
                        <div className='flex flex-col text-left'>
                            <h1 className="text-xl font-semibold">JON DEO</h1>
                            <p className='w-44 lg:w-96 lg:tracking-wider'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </div>
                    </div>
                        
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex justify-center items-center gap-5 lg:gap-10">
                        <div className="avatar">
                            <div className="w-20 lg:w-40 rounded-full">
                                <img src="https://i.ibb.co/zxw872F/Jeff-Bezos-2017.jpg" alt='jeff'/>
                            </div>
                        </div>
                        <div className='flex flex-col text-left'>
                            <h1 className="text-xl font-semibold">Jeff Bezos</h1>
                            <p className='w-44 lg:w-96 lg:tracking-wider'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </div>
                    </div>
                        
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex justify-center items-center gap-5 lg:gap-10">
                        <div className="avatar">
                            <div className="w-20 lg:w-40 rounded-full">
                                <img src="https://i.ibb.co/NYFSn07/elon.jpg" alt='elon musk'/>
                            </div>
                        </div>
                        <div className='flex flex-col text-left'>
                            <h1 className="text-xl font-semibold">Elon Musk</h1>
                            <p className='w-44 lg:w-96 lg:tracking-wider'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </div>
                    </div>
                        
                </SwiperSlide>
            </Swiper>
        </div>
        </div>
    );
};

export default Testimonial;