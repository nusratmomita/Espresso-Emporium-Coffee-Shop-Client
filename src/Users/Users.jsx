import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import { MdOutlineEditCalendar } from "react-icons/md";
import { MdRemoveRedEye } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import sweetAlert from 'sweetalert2';


const Users = () => {
    const initialUsers = useLoaderData();
    const [users , setUsers] = useState(initialUsers)
    // console.log(initialUsers);

    const handleDeleteUserBtn = (id) => {
        // console.log(id)
        sweetAlert.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
            }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/users/${id}`,{
                    method: "DELETE"
                })
                .then(res=>res.json())
                .then(data=>{
                    // console.log("Data after deleting",data);

                    // TODO: delete user from firebase!!
                    
                    if(data.deletedCount){
                        sweetAlert.fire({
                        title: "Deleted!",
                        text: "User has been deleted.",
                        icon: "success"
                        });
                        const remainingUsers = users.filter(user=> user._id !== id);
                        setUsers(remainingUsers);
                    }
                })
            }
            });
    }

    return (
        <div className='mt-40 raleway-font'>
            <h2 className='text-5xl text-center font-bold'>Total Active users : {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table mt-20">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Contact</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user,index)=>
                                <tr key={user._id}>
                                    <th>
                                    {
                                        index+1
                                    }
                                    </th>
                                    <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                            src={user.photo_url}
                                            alt="userImage" />
                                        </div>
                                        </div>
                                        <div>
                                        <div className="font-bold">{user.name}</div>
                                        <div className="text-sm opacity-50">{user.address}</div>
                                        </div>
                                    </div>
                                    </td>
                                    <td>
                                        {user.email}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">{user.phone}</span>
                                    </td>
                                    
                                    <th>
                                    <button className="cursor-pointer"><MdRemoveRedEye size={35} color='green'></MdRemoveRedEye></button>
                                    <button className="cursor-pointer ml-5 "><MdOutlineEditCalendar size={35} color='brown'></MdOutlineEditCalendar></button>
                                    <button onClick={() => handleDeleteUserBtn(user._id)} className="cursor-pointer ml-5"><RiDeleteBin6Line size={35} color='red'></RiDeleteBin6Line></button>
                                    </th>
                                </tr>                      
                            )
                        }
                    </tbody>
                </table>
                </div>
        </div>
    );
};

export default Users;