import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const dispatch= useDispatch();
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

  useEffect(() => {
    const unsubscribe =onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        nevigate("/browse");

      } else {
        // User is signed out
        dispatch(removeUser());
        nevigate("/");
      }
    });
    // Unsubscribe when components will unmounts
    return ()=> unsubscribe();
  }, []);


  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src={LOGO_URL}
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

