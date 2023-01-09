import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';



export default function Home(){

    return (
        <div >
            <div className='header'>
            <Navbar />
            <div className='main'></div>
            </div>
            <Footer />
        </div>
    );
}