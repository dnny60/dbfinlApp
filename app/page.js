"use client";
import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection/index";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupPage from "./signup/page";
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  // const toggle = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <>
      <Navbar />

      <HeroSection />
    </>
  );
};

export default Home;
