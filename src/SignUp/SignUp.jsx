import React, { use } from "react";
import { AuthContext } from "../Auth/AuthContext";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser } = use(AuthContext);
  // console.log(createUser)

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    // const email = formData.get('email');
    // const password = formData.get('password');
    // console.log(email,password)

    const {email , password , ...restFormData} = Object.fromEntries(formData.entries());

    

    createUser(email,password)
    .then((result) => {
        console.log(result.user);


        const userProfile = {
            email , 
            ...restFormData,
            creationTime : result.user?.metadata?.creationTime,
            lastSignInTime : result.user?.metadata?.lastSignInTime
        }
        // console.log(userProfile)

        fetch('http://localhost:3000/users',{
            method: "POST",
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(userProfile)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log("after creating new user",data)
            if(data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your account has been created successfully!",
                    showConfirmButton: false,
                    timer: 1500
                    });
            }
            form.reset();
        })
    
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log((errorMessage,errorCode))
    });
  };


  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full mx-auto max-w-lg shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSignUp} className="fieldset">
              <h1 className="text-6xl font-bold">Sign Up now!</h1>
              <label className="label">Name</label>
              <input type="text" name="name" className="input" placeholder="Name" />
              <label className="label">Email</label>
              <input type="email" name="email" className="input" placeholder="Email" />
              <label className="label">Phone</label>
              <input type="tel" name="phone" className="input" placeholder="Phone Number" />
              <label className="label">Photo URL</label>
              <input type="text" name="photo url" className="input" placeholder="Photo URL" />
              <label className="label">Address</label>
              <input type="text" name="address" className="input" placeholder="Address" />

              <label className="label">Password</label>
              <input type="password" name="password" className="input" placeholder="Password" />

              <button type="submit" className="btn btn-neutral mt-4">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
