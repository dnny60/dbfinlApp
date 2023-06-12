"use client";
import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import Feedback from "../Components/Feedback";
import { BrowserRouter } from "react-router-dom";

const FeedbackPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <BrowserRouter>
        <Navbar toggle={toggle} />

        <Feedback />
      </BrowserRouter>
    </>
  );
};

export default FeedbackPage;
