"use client";
import React, { useState } from "react";
import PostSection from "../../components/PostSection";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";

const Postpage = ({ params }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar toggle={toggle} />

      <PostSection param={params} />
    </>
  );
};

export default Postpage;
