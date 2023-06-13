"use client";
import React, { useState } from "react";
import YourRecord from "../components/Record";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { BrowserRouter } from "react-router-dom";
import { useSession } from "next-auth/react";

const YourRecordpage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <BrowserRouter>
        <Navbar toggle={toggle} />
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <YourRecord parm={session} />
      </BrowserRouter>
    </>
  );
};

export default YourRecordpage;
