import React, { useCallback, useContext, useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../utils/UserContext";
import { LOGO } from "../utils/Constant";
import {toggleGpt} from "../utils/GptSlice";
import { useDispatch } from "react-redux";
const Header = () => {
  const navigation = useNavigate();
  const context = useContext(UserContext);
  const dispatch= useDispatch();
  if (!context) {
    throw new Error("Login must be used within a UserProvider");
  }
  const { user, logoutUser, loginUser } = context;

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        logoutUser();
        navigation("/");
      })
      .catch((error) => {});
  };
  useEffect(() => {
   const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log("onAuthStateChanged called");
        loginUser(user);
         navigation("/browse");
      } else {
         navigation("/");
      }
    });
    return ()=> unsubscribe();
  }, []);
const handleClick = useCallback(() => {
  console.log("Clicked!");
  dispatch(toggleGpt());
}, []);
  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-20" src={LOGO} alt="logo" />
      {user && (
        <div className="flex p-2">
          <button
            className="mx-4 my-2 px-4 py-2 bg-purple-800 text-white rounded-lg"
            onClick={handleClick}
          >
            Gpt Search
          </button>
          <img className="w-12 h-12" alt="usericon" src={user?.photoURL} />
          <button onClick={handleLogout} className="font-bold text-white">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
