"use client";
import React, { useState } from "react";
import PostSection from "../../components/PostSection";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import { BrowserRouter } from "react-router-dom";

const Postpage = ({ params }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <BrowserRouter>
        <Navbar toggle={toggle} />

        <PostSection param={params} />
      </BrowserRouter>
    </>
  );
};

export default Postpage;
