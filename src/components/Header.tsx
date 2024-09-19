import React from 'react'
import {auth} from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const navigation = useNavigate();
  const handleLogout = () => {
    
    signOut(auth)
      .then(() => {
       navigation("/");
      })
      .catch((error) => {
        
      });
  }
  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-22"
        src="https://images.ctfassets.net/y2ske730sjqp/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg?w=460"
        alt="logo"
      />
      <button onClick={handleLogout} className="font-bold text-white">
        (Sign Out)
      </button>
    </div>
  );
}

export default Header