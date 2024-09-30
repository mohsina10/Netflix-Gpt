import React, { useContext, useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../utils/UserContext";
import { LOGO } from "../utils/Constant";
const Header = () => {
  const navigation = useNavigate();
  const context = useContext(UserContext);
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

  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-22"
        src={LOGO}
        alt="logo"
      />
      {user && (
        <div className="flex p-2">
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
