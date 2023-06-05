"use client";
import React from "react";
import SignIn from "../components/Signin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const SigninPage = () => {
  return (
    <>
      <Router>
        <SignIn />
      </Router>
    </>
  );
};

export default SigninPage;
