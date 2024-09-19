import React, { useContext } from 'react'
import Login from './Login'
import Browse from './Browse'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { onAuthStateChanged } from 'firebase/auth';
import {auth} from '../utils/firebase';
import { UserContext } from '../utils/UserContext';
const Body = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("Login must be used within a UserProvider");
  }
   const { loginUser, user } = context; 
  const appRouter = createBrowserRouter([
    {
      path:"/", 
      element:<Login/>
    }, 
    {
      path:"/browse", 
      element:<Browse/>
    }
  ]);
  onAuthStateChanged(auth, (user) => {
    if (user) {

       const uid = user.uid;
       console.log("user from body",user);
       loginUser(user);
    } else {
     
    }
  });
  return (
    <div>
     <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body