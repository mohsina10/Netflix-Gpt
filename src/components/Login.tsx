import React, { useState } from 'react'
import Header from './Header'
import { useFormik } from 'formik';
import {signUpSchema} from "../validations/index";
const initialValues={
  name:"", 
  email:"", 
  password:""
}

const Login = () => {
  const [isSignedIn,setIsSignedIn] =useState(false);
  const {values, errors, touched,handleBlur, handleChange, handleSubmit}=useFormik({
    initialValues:initialValues, 
    validationSchema:signUpSchema,
    onSubmit:(values) =>{
      console.log("Values from form", values);
    }
  })
  const handleClick =()=>{
    setIsSignedIn(!isSignedIn);
  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/19fc1a4c-82db-4481-ad08-3a1dffbb8c39/IN-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_24a485f6-1820-42be-9b60-1b066f1eb869_large.jpg"
          alt="logo"
        />
      </div>
      <form
        className="w-3/12 absolute  p-12 bg-black my-36 mx-auto right-0 left-0 text-white"
        onSubmit={handleSubmit}
      >
        <h1 className="font-bold text-3xl py-4">
          {!isSignedIn ? "Sign In" : "Sign Up"}
        </h1>
        {isSignedIn && (
          <>
            <input
              type="name"
              name="name"
              id="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Full Name"
              className="p-4 my-4 w-full bg-gray-700"
            />
            {errors.name && touched.name && <p>{errors.name}</p>}
          </>
        )}
        <input
          type="email"
          name="email"
          id="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        {errors.email && touched.email && (<p>{errors.email}</p>)}
        <input
          type="password"
          name="password"
          id="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        {errors.password && touched.password && (<p>{errors.password}</p>)}
        <button className="p-4 my-6 bg-red-700 w-full">
          {!isSignedIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4" onClick={handleClick}>
          New to Netflix Sign Up Now
        </p>
      </form>
    </div>
  );
}

export default Login