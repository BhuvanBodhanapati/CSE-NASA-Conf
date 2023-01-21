import './App.css';
import MyRoutes from './router'
import NavBar from "../src/components/Navbar/navbar"
import Footer from "../src/components/Footer/footer"
import MarqueeText from "../src/components/Marquee/marquee";
import { Navigate } from "react-router-dom";
import {useState,useEffect} from 'react';
import { useRoutes } from "react-router-dom";
import { ApplicationConstant } from "../src/constant/applicationConstant";
import React from "react";
import PageNotFount from "../src/views/pageNotFound";

function App() {

  return (
    <div>
      <NavBar />
      <MarqueeText />
      <MyRoutes />
      <Footer />
    </div>
  );
}

export default App;
