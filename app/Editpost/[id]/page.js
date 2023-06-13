"use client";
import React, { useState } from "react";
import EditPost from "../../components/EditPost";
// import Sidebar from '../components/Sidebar'
import Navbar from "../../components/Navbar";
import { SessionProvider } from "next-auth/react";
import { BrowserRouter } from "react-router-dom";

const Editpostpage = ({ params }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <BrowserRouter>
        <Navbar toggle={toggle} />
        {/* <Sidebar isOpen={isOpen} toggle={toggle} /> */}
        <EditPost param={{ params }} />
      </BrowserRouter>
    </>
  );
};

export default Editpostpage;
