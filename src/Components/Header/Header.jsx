import React from 'react';
import siteLogo from "../../assets/more/logo1.png"
const Header = () => {
    return (
        <div className='bg-[#331A15] flex justify-center items-center'>
            <img className="w-20 h-20" src={siteLogo} alt="logo" />
            <h1 className='text-white text-3xl font-extrabold'>Espresso Emporium</h1>
        </div>
    );
};

export default Header;