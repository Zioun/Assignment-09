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
                    <img className='' src="/src/assets/404.gif" alt="" />
                    <div className='flex justify-center'>
                        <Link to="/"><button className='py-2 px-10 bg-[#A62F03] text-white mb-10 rounded'>Back To Home</button></Link>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;