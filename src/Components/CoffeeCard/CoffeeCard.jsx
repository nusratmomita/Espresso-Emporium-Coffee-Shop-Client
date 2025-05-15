import React from 'react';
import { GrFormView } from "react-icons/gr";
import { BiSolidEditAlt } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import Swal from 'sweetalert2';

const CoffeeCard = ({coffee}) => {
    // console.log(coffee)

    const handleDelete = (id) => {
        // console.log("item to be deleted,",id)

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                // console.log(result.isConfirmed);
                if(result.isConfirmed){
                    fetch(`http://localhost:3000/coffee/${id}`,{
                        method: "DELETE"
                    })
                    .then(res=>res.json())
                    .then(data=>{
                        if(data.deleteCount){
                            Swal.fire({
                            title: "Deleted!",
                            text: "Coffee has been deleted.",
                            icon: "success"
                            });
                        }
                    })
                }
            });
} 

    return (
        <div className='raleway-font '>
            <div className="flex gap-5 p-8 bg-[#F5F4F1] shadow-sm border-2 border-[#331A15] rounded-2xl">
                <figure>
                    <img className='mt-10 ml-5 w-20 h-35 border-2 border-[#331A15] p-2'
                    src={coffee.coffee_photo}
                    alt="Coffee" />
                </figure>
                <div className="ml-12 mt-15 flex justify-between gap-5">
                    <div>
                        <h2 className='card-title'>Coffee Name: {coffee.coffee_name}</h2>
                        <p>Available Quantity : {coffee.coffee_quantity}</p>
                        <h1>Taste : {coffee.coffee_taste}</h1>
                    </div>
                    <div className="flex flex-col gap-4">
                        <button className="tooltip btn bg-[#D2B48C]" data-tip="View Details"><GrFormView size={35}></GrFormView></button>
                        <button className="tooltip btn bg-[#331A15]" data-tip="Edit"><BiSolidEditAlt size={35} color='white'></BiSolidEditAlt></button>
                        <button onClick={()=>handleDelete(coffee._id)} className="tooltip btn bg-[#EA4744]" data-tip="Delete"><MdDeleteForever size={35} color='white'></MdDeleteForever></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;