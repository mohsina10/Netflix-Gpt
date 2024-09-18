import React, { useContext } from 'react'
import { UserContext } from "../utils/UserContext";
import Header from './Header';
const Browse =()=> {

   const context = useContext(UserContext);
   if (!context) {
     throw new Error("Login must be used within a UserProvider");
   }

   const { loginUser, user } = context; 
   console.log("User:@@ " + user);
 
    return (
    <>
      <Header/>
      <div>Hello {user?.email}</div>
    </>
    );
}

export default Browse;