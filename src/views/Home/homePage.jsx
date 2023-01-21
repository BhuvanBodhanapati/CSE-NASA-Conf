import { ApplicationConstant } from "../../constant/applicationConstant";
import { Link } from "react-router-dom";
import "./home.css"
import HomePageCard from './cards'
import Images from "./images";
import logo from "../../assets/mits.jpg";
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
