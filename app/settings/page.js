"use client";
import React, { useState } from "react";
import Setting from "../components/Setting";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { BrowserRouter } from "react-router-dom";
import { useSession } from "next-auth/react";

const Settingpage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session, status } = useSession();

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  if (status === "authenticated") {
    return (
      <>
        <BrowserRouter>
          <Navbar toggle={toggle} />
          <Sidebar isOpen={isOpen} toggle={toggle} />
          <Setting parm={session.user} />
        </BrowserRouter>
      </>
    );
  } else {
    return <a href="/signin">Sign in</a>;
  }
};

export default Settingpage;
