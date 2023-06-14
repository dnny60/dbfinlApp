"use client";
import React, { useState } from "react";
import YourRecord from "../components/Record";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { BrowserRouter } from "react-router-dom";
import { useSession, SessionProvider } from "next-auth/react";

const YourRecordpage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <SessionProvider>
        <BrowserRouter>
          <Navbar toggle={toggle} />
          <Sidebar isOpen={isOpen} toggle={toggle} />
          <YourRecord parm={session} />
        </BrowserRouter>
      </SessionProvider>
    </>
  );
};

export default YourRecordpage;
