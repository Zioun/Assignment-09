import React from 'react';
import Slider from './Slider';
import { FaRegChartBar } from "react-icons/fa";
import {useLoaderData} from "react-router-dom"
import Resident from './Resident';

const Home = () => {
    const resident = useLoaderData();
    return (
        <div>
            <Slider></Slider>
            <div className='container m-auto grid grid-cols-10 py-10 bg-[#FFFFFF] gap-5 max-w-[1400px]'>
                <div className='max-w-[300px] col-span-2 text-center shadow-md p-[20px] rounded'>
                    <div className='text-[50px]'>
                       <span className='flex justify-center text-[#A62F03]'><FaRegChartBar /></span>
                    </div>
                    <div>
                        <h1 className='text-[16px] font-bold py-2'>Vendi la tua casa</h1>
                        <p className='text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora culpa rem quia laboriosam, dolorum blanditiis!</p>
                    </div>
                </div>
                <div className='max-w-[300px] col-span-2 text-center shadow-md p-[20px] rounded'>
                    <div className='text-[50px]'>
                       <span className='flex justify-center text-[#A62F03]'><FaRegChartBar /></span>
                    </div>
                    <div>
                        <h1 className='text-[16px] font-bold py-2'>Vendi la tua casa</h1>
                        <p className='text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora culpa rem quia laboriosam, dolorum blanditiis!</p>
                    </div>
                </div>
                <div className='max-w-[300px] col-span-2 text-center shadow-md p-[20px] rounded'>
                    <div className='text-[50px]'>
                       <span className='flex justify-center text-[#A62F03]'><FaRegChartBar /></span>
                    </div>
                    <div>
                        <h1 className='text-[16px] font-bold py-2'>Vendi la tua casa</h1>
                        <p className='text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora culpa rem quia laboriosam, dolorum blanditiis!</p>
                    </div>
                </div>
                <div className='max-w-[300px] col-span-2 text-center shadow-md p-[20px] rounded'>
                    <div className='text-[50px]'>
                       <span className='flex justify-center text-[#A62F03]'><FaRegChartBar /></span>
                    </div>
                    <div>
                        <h1 className='text-[16px] font-bold py-2'>Vendi la tua casa</h1>
                        <p className='text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora culpa rem quia laboriosam, dolorum blanditiis!</p>
                    </div>
                </div>
                <div className='max-w-[300px] col-span-2 text-center shadow-md p-[20px] rounded'>
                    <div className='text-[50px]'>
                       <span className='flex justify-center text-[#A62F03]'><FaRegChartBar /></span>
                    </div>
                    <div>
                        <h1 className='text-[16px] font-bold py-2'>Vendi la tua casa</h1>
                        <p className='text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora culpa rem quia laboriosam, dolorum blanditiis!</p>
                    </div>
                </div>
            </div>
            <div className='bg-[#FBFBFB] py-10'>
                <div className='container m-auto max-w-[1130px]'>
                    <div className='grid grid-cols-12 gap-10'>
                        {
                            resident.map(resident => <Resident key={resident.id} resident={resident}></Resident>)
                        }
                          
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;