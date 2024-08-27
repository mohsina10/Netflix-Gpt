import React from 'react'
import Header from './Header'
import { useFormik } from 'formik';
const initialValues={
  name:"", 
  email:"", 
  password:""
}
const Login = () => {
  const {values, errors, handleBlur, handleChange, handleSubmit}=useFormik({
    initialValues:initialValues, 
    onSubmit:(values) =>{
      console.log("Values from form", values);
    }
  })
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/19fc1a4c-82db-4481-ad08-3a1dffbb8c39/IN-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_24a485f6-1820-42be-9b60-1b066f1eb869_large.jpg"
          alt="logo"
        />
      </div>
      <form className="w-3/12 absolute  p-12 bg-black my-36 mx-auto right-0 left-0 text-white" onSubmit={handleSubmit}>
        <h1 className="font-bold text-3xl py-4">Sign In</h1>
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
        <button className="p-4 my-6 bg-red-700 w-full">Sign In</button>
      </form>
    </div>
  );
}

export default Login