import React from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const AddCoffee = () => {

  const navigate = useNavigate();

  const handleAddCoffee = e => {
    e.preventDefault();
    // console.log("Coffee added!")
    const form = e.target;

    // * New thing to get all the field names**
    const formData = new FormData(form)
    const addCoffeeData = Object.fromEntries(formData.entries());
    // console.log(formData);
    // console.log(addCoffeeData)

    fetch('http://localhost:3000/coffee',{
        method: "POST",
        headers: {
            'content-type': "application/json"
        },
        body: JSON.stringify(addCoffeeData)
    })
    .then(res=>res.json())
    .then(data=>{
        // console.log("New coffee added",data)
        if(data.insertedId){
          Swal.fire({
              title: "New Coffee Added Successfully!",
              icon: "success",
              draggable: true
          });
        }
        form.reset()
    })
  }

  return (
    <div className="p-24">
      <div className="bg-[#F4F3F0] p-12 text-center space-y-5">
        <h1 className="text-5xl text-black">Add New Coffee</h1>
        <p className="raleway-font text-[#06000090] font-extrabold text-lg">
          Coffee is a rich, aromatic beverage loved worldwide, offering energy,
          comfort, and flavor in every cup—perfect for daily inspiration and
          connection. From bold espressos to creamy lattes, it unites people,
          sparks conversations, fuels productivity, and delivers warmth, making
          every moment a little better.
        </p>
    
        <form onSubmit={handleAddCoffee}>
            <div className="mt-15 grid grid-cols-1 md:grid-cols-2 gap-5">
                <fieldset className="raleway-font fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <label className="label text-[#1B1A1A] font-bold">Name</label>
                    <input type="text" name="coffee_name" className="input w-full" placeholder="Enter coffee name"/>
                </fieldset>
                <fieldset className="raleway-font fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <label className="label text-[#1B1A1A] font-bold">Quantity</label>
                    <input type="text" name="coffee_quantity" className="input w-full" placeholder="Enter coffee quantity"/>
                </fieldset>
                <fieldset className="raleway-font fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <label className="label text-[#1B1A1A] font-bold">Supplier</label>
                    <input type="text" name="coffee_supplier" className="input w-full" placeholder="Enter coffee Supplier"/>
                </fieldset>
                <fieldset className="raleway-font fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <label className="label text-[#1B1A1A] font-bold">Taste</label>
                    <input type="text" name="coffee_taste" className="input w-full" placeholder="Enter coffee Taste"/>
                </fieldset>
                <fieldset className="raleway-font fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <label className="label text-[#1B1A1A] font-bold">Category</label>
                    <input type="text" name="coffee_category" className="input w-full" placeholder="Enter coffee category"/>
                </fieldset>
                <fieldset className="raleway-font fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <label className="label text-[#1B1A1A] font-bold">Details</label>
                    <input type="text" name="coffee_details" className="input w-full" placeholder="Enter coffee details"/>
                </fieldset>
            </div>
         
            <fieldset className="raleway-font fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                <label className="label text-[#1B1A1A] font-bold">Photo</label>
                <input type="text" name="coffee_photo" className="input w-full" placeholder="Enter coffee photo"/>
            </fieldset>
          

            <button onClick={() => navigate('/')} className="btn w-full text-2xl bg-[#D2B48C] border-2 border-[#331A15]" type="submit" value="">Add Coffee</button>
        </form>
      </div>
      
    </div>
    
  );
};

export default AddCoffee;
