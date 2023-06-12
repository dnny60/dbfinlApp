"use client";
import React, { useState } from "react";
import Thankyou from "../components/Thankyou";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const ThankyouPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar toggle={toggle} />

      <Thankyou />
    </>
  );
};

export default ThankyouPage;
