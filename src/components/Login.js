import Header from "./Header";
import React, { useState } from "react";

const Login = () => {
    const [isSignInForm, setIsSignInForm]=useState(true);


    const toggleSignInForm=()=>{
        setIsSignInForm(!isSignInForm);
    }
  return (
    <div className="bg-gray-200">
      <Header />
      <div className="">
        <img
          className="absolute"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dd4dfce3-1a39-4b1a-8e19-b7242da17e68/86742114-c001-4800-a127-c9c89ca7bbe4/IN-en-20240527-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg"
        ></img>
      </div>

      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-75">
        <h1 className="font-bold text-3xl p-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>

        {!isSignInForm && <input
          type="text"
          placeholder="Full Name"
          className="p-4 my-4 w-full bg-gray-600"
        />}

        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-600"
        />
       
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-600"
        />
        <button className="p-4 my-2 bg-red-700 w-full  ">{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className=" py-2 cursor-pointer" onClick={toggleSignInForm}>
        {isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered?  Sign In Now "}
            </p>
      </form>
    </div>
  );
};

export default Login;
