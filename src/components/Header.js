import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import {useSelector} from "react-redux";

const Header = () => {
  const nevigate= useNavigate();
  const user = useSelector(store=>store.user)
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        nevigate("/");
        
      })
      .catch((error) => {
        // An error happened.
        nevigate("/error")

      });
  };
  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="logo"
      ></img>

      {user && (<div className="flex p-2">
        <img
          className="w-12 h-12 rounded-lg "
          alt="usericon"
          src={user.photoURL}
        ></img>
        <button onClick={handleSignOut} className="font-bold text-white">
          (Sign Out)
        </button>
      </div>
      )}
    </div>
  );
};
export default Header;
