import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../Pages/Header/Header';
import Footer from '../../Pages/Footer/Footer';

const Root = () => {
    return (
        <div className='font-roboto flex flex-col h-screen overflow-x-hidden'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;