import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../Pages/Header/Header';
import Footer from '../../Pages/Footer/Footer';

const Root = () => {
    return (
        <div className='font-roboto'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;