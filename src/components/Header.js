import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import {  SUPPORTED_LANGUAGE } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
import logo from "../assets/mainlogo.svg";

const Header = () => {
  const dispatch = useDispatch();
  const nevigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showgptSearch = useSelector((store) => store.gpt.showGptSearch);
  

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        nevigate("/");
      })
      .catch((error) => {
        // An error happened.
        nevigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        // console.log(user);
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
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleChangeLanguage = (e) => {
    // console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b  z-10 flex flex-col md:flex-row justify-between ">
      {/* <img className="w-44 mx-auto  md:mx-0" src={LOGO_URL} alt="logo"></img> */}
      <img className="w-[270px] mx-auto  md:mx-0" src={logo} alt="logo"></img>

      {user && (
        <div className="flex justify-between p-2">
          {showgptSearch && (
            <select
              className="p-2 m-2 bg-gray-900 text-white"
              onChange={handleChangeLanguage}
            >
              {SUPPORTED_LANGUAGE?.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            className="py-2 px-4 m-2 bg-purple-800 text-white rounded-md  "
            onClick={handleGptSearchClick}
          >
           {showgptSearch ? "Home Page" : "GPT Search"}
          </button>

          <img
            className="hidden md:block w-12 h-12 rounded-full cursor-pointer"
            alt="usericon"
            // src={user.photoURL}
            src="https://yt3.googleusercontent.com/ytc/AIdro_mmfEvh2huKGBoPiKiujowwLIaE7-Rk6sJIFn18YGVohBs=s160-c-k-c0x00ffffff-no-rj"
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
