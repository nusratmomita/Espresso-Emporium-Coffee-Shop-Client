import React, { useContext } from 'react';
import { AuthContext } from '../Auth/AuthContext';

const SignIn = () => {
    const {signInUser} = useContext(AuthContext);

    const handleSignIn = (e) => {
        e.preventDefault();
        const form =e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email,password);

        signInUser(email,password)
        .then((result)=>{
            console.log(result.user);

            const signInInfo = {
                email,
                lastSignInTime: result.user?.metadata?.lastSignInTime
            }

            // update last sign in time in the DB
            fetch('http://localhost:3000/users', {
                method: "PATCH",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(signInInfo)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log("After updating the data",data)
            }) 
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full mx-auto max-w-lg shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSignIn} className="fieldset">
              <h1 className="text-6xl font-bold">Sign In To Your account</h1>
              <label className="label">Email</label>
              <input type="email" name="email" className="input w-full" placeholder="Email" />

              <label className="label">Password</label>
              <input type="password" name="password" className="input w-full" placeholder="Password" />

              <button type="submit" className="btn btn-neutral mt-4">
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    );
};

export default SignIn;