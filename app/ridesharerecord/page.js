"use client";
import React, { useState } from "react";
import YourRecord from "../components/Record";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { BrowserRouter } from "react-router-dom";

const YourRecordpage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <BrowserRouter>
        <Navbar toggle={toggle} />
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <YourRecord />
      </BrowserRouter>
    </>
  );
};

export default YourRecordpage;
