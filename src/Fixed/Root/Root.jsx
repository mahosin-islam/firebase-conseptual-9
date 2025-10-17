import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';

const Root = () => {
    return (
        <div className='w-11/12 mx-auto border-2'>
            <Navbar></Navbar>
            <div className='bg-purple-500 min-h-[calc(100vh-200px)] flex items-center justify-center'>
                <div>
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>            
        </div>
    );
};

export default Root;