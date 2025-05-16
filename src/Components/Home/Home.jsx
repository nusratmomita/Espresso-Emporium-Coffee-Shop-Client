import React, { useState } from 'react';
import { NavLink, useLoaderData } from 'react-router';
import CoffeeCard from '../CoffeeCard/CoffeeCard';
import { BsFillCupHotFill } from "react-icons/bs";

const Home = () => {
    const coffeeData = useLoaderData();
    // console.log(coffeeData);
    const [coffees , setCoffees] = useState(coffeeData);

    return (
        <>
            <div className='text-center'>
                <h1 className='text-[#331A15] text-xl font-bold'>- - Sip & Savor - -</h1>
                <p className='text-[#331A15] font-extrabold text-3xl'>Our Popular Products</p>
                <div>
                    <NavLink to="/addCoffee" className='tooltip w-[190px] my-10 flex gap-4 bg-[#E3B577] p-4 rounded-2xl border-2 border-[#331A15] text-3xl text-white' data-tip="Add Coffee">Add Coffee<BsFillCupHotFill size={30}></BsFillCupHotFill> </NavLink>
                </div>
            </div>
            <div className='mb-20 grid grid-cols-1 lg:grid-cols-2 gap-4'>
                {
                    coffees.map((coffee) => <CoffeeCard 
                                                    key={coffee._id} 
                                                    coffee={coffee}
                                                    coffees={coffees}
                                                    setCoffees={setCoffees}>
                                                </CoffeeCard>)
                }
            </div>
        </>
    );
};

export default Home;