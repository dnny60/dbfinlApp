"use client";
import React, { useState } from "react";
import Sidebar from "../../Components/Sidebar";
import Navbar from "../../Components/Navbar";
import Feedback from "../../Components/Feedback";
import { BrowserRouter } from "react-router-dom";
import { useSession } from "next-auth/react";

const FeedbackPage = ({ params }) => {
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

          <Feedback parm={params} session={session} />
        </BrowserRouter>
      </>
    );
  }

  return <a href="/api/auth/signin">Sign in</a>;
};

export default FeedbackPage;
