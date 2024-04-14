import React, { useEffect, useRef } from 'react';
import Slider from './Slider';
import { useLoaderData } from 'react-router-dom';
import Resident from './Resident';
import { Helmet } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    const resident = useLoaderData();
    const contentRef = useRef(null);

    useEffect(() => {
        AOS.init({ duration: 500 });
        AOS.refresh();
    }, []);

    return (
        <div ref={contentRef}>
            <Helmet>
                <title>Residence-Home</title>
            </Helmet>
            <Slider />
            <div className='container m-auto grid grid-cols-10 py-10 bg-[#FFFFFF] gap-5 max-w-[1400px]'>
                <div data-aos="fade-up-right" className='rounded border-t-2 border-[#A62F03] col-span-5 p-5 shadow-lg'>
                    <span className='bg-[#A62F03] px-5 py-1 rounded-full text-white text-[16px]'>For Seal</span>
                    <p className='mt-5 text-[#7A7A7A] text-[15px]'>Embark on a journey to find your dream home with our exclusive collection of properties for sale. From elegant beachfront villas to contemporary urban lofts, our portfolio showcases an array of distinctive residences designed to exceed expectations. Explore architectural marvels, serene retreats, and charming family homes crafted with precision and care. Each property embodies a unique blend of style, comfort, and functionality, offering an unparalleled living experience. Whether you're a first-time buyer or a seasoned investor, our team is dedicated to guiding you through every step of the home-buying process. Embrace the opportunity to own a piece of paradise and create a lifetime of cherished memories in your new home.</p>
                </div>
                <div data-aos="fade-up-left" className='rounded border-t-2 border-[#A62F03] col-span-5 p-5 shadow-lg'>
                    <span className='bg-[#A62F03] px-5 py-1 rounded-full text-white text-[16px]'>For Rent.</span>
                    <p className='mt-5 text-[#7A7A7A] text-[15px]'>Discover a world of comfort and convenience with our meticulously crafted rental properties. From luxurious apartments with breathtaking city views to cozy cottages nestled in serene landscapes, we offer a diverse range of rental options to suit every lifestyle. Enjoy modern amenities, spacious layouts, and a vibrant community atmosphere. Whether you're seeking a temporary retreat or a long-term residence, our rental properties provide the perfect backdrop for creating lasting memories. Experience hassle-free living with responsive maintenance services and attentive property management. Make your next move a seamless transition into the lifestyle you deserve with our exceptional rental offerings.</p>
                </div>
            </div>
            <div className='bg-[#FBFBFB] py-10'>
                <div className='container m-auto max-w-[1130px]'>
                    <div data-aos="zoom-in-down" className='text-center'>
                        <h1 className='font-semibold text-[#A62F03]'>Residence</h1>
                        <h1 className='text-[40px]'>Our new advertisements</h1>
                        <p className='max-w-[700px] text-[16px] m-auto mb-10 mt-3 text-[#7A7A7A] font-normal'>A list of villas, apartments, country houses, commercial premises, and prestigious properties currently available. Various turnkey solutions.</p>
                    </div>
                    <div className='grid grid-cols-12 gap-10'>
                        {resident.map((resident) => (
                            <Resident key={resident.id} resident={resident} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
