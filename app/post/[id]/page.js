"use client";
import React, { useState } from "react";
import PostSection from "../../components/PostSection";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import { BrowserRouter } from "react-router-dom";
import { useSession } from "next-auth/react";
import { SessionProvider } from "next-auth/react";

const Postpage = ({ params }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <SessionProvider session={session}>
        <BrowserRouter>
          <Navbar toggle={toggle} />

          <PostSection param={params} session={session} />
        </BrowserRouter>
      </SessionProvider>
    </>
  );
};

export default Postpage;
