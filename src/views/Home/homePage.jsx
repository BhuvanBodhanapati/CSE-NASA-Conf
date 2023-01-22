import "./home.css"
import HomePageCard from './cards'
import Images from "./images";
import React from "react";



const HomePage = () => {
  return (
    <div className="homeBody">
      <Images/>
      <HomePageCard/>
    </div>
  );
};

export default HomePage;
