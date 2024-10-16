import React, { useContext, useEffect } from "react";
import { UserContext } from "../utils/UserContext";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./maincontainer/MainContainer";
import SecondaryContainer from "./maincontainer/SecondaryContainer";
const Browse = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("Login must be used within a UserProvider");
  }
  useNowPlayingMovies();
  const { loginUser, user } = context;
  return (
    <>
      <Header />
     <MainContainer/>
     <SecondaryContainer/>
    </>
  );
};

export default Browse;
