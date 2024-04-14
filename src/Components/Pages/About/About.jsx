import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const About = () => {
    useEffect(() => {
        AOS.init({ duration: 500 });
        AOS.refresh();
    }, []);
    return (
        <div className='container max-w-[1200px] m-auto my-20'>
            <div className='flex flex-col items-center gap-5'>
                <div data-aos="zoom-in-down" className='text-center'>
                        <h1 className='font-semibold text-[#A62F03]'>WHO WE ARE</h1>
                        <h1 className='text-[40px]'>About our company</h1>
                        <p className='max-w-[700px] text-[16px] m-auto mb-10 mt-3 text-[#7A7A7A] font-normal'>Utilizing our exceptional experience and knowledge of the luxury waterfront markets,we serve an extensive and elite worldwide client base. </p>
                </div>
                <div className='grid grid-cols-12 gap-10'>
                    <div data-aos="zoom-in-up" className='col-span-6'>
                        <h1 className='text-[20px] font-semibold'>Our Mission</h1>
                        <p className='mt-2 text-[#696969]'>With over $2 Billion in sales, Our agency is the industry’s top luxury producer with over 27 years of experience in marketing Seattles’s most prestigious waterfront properties. </p>
                    </div>
                    <div data-aos="zoom-in-up" className='col-span-6'>
                        <h1 className='text-[20px] font-semibold'>Our Vision</h1>
                        <p className='mt-2 text-[#696969]'>With over $2 Billion in sales, Our agency is the industry’s top luxury producer with over 27 years of experience in marketing Seattles’s most prestigious waterfront properties. </p>
                    </div>
                    <div data-aos="zoom-in-up" className='col-span-6'>
                        <h1 className='text-[20px] font-semibold'>Our Values</h1>
                        <p className='mt-2 text-[#696969]'>With over $2 Billion in sales, Our agency is the industry’s top luxury producer with over 27 years of experience in marketing Seattles’s most prestigious waterfront properties. </p>
                    </div>
                    <div data-aos="zoom-in-up" className='col-span-6'>
                        <h1 className='text-[20px] font-semibold'>Our Resources</h1>
                        <p className='mt-2 text-[#696969]'>With over $2 Billion in sales, Our agency is the industry’s top luxury producer with over 27 years of experience in marketing Seattles’s most prestigious waterfront properties. </p>
                    </div>
                    
                    
                    
                </div>
            </div>
        </div>
    );
};

export default About;