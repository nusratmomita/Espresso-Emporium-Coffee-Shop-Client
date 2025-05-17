import React from 'react';
import { useLoaderData } from 'react-router';

const Users = () => {
    const initialUsers = useLoaderData();
    console.log(initialUsers);

    return (
        <div className='mt-40 raleway-font'>
            <h2 className='text-5xl text-center font-bold'>Total Active users : {initialUsers.length}</h2>
        </div>
    );
};

export default Users;