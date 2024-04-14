import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='font-roboto flex flex-col h-screen'>
            <Header></Header>
            <div className='flex justify-center'>
                <div>
                    <img className='mt-5' src="/src/assets/404.gif" alt="" />
                    <div className='flex justify-center'>
                        <Link to="/"><button className='py-2 px-10 bg-[#ECF1FF] text-[#092D32] mb-10 rounded font-semibold'>Back to home</button></Link>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;