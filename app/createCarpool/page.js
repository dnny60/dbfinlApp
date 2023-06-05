"use client";
import React, { useState } from "react";
import Createcarpool from "../components/CreateCarpool";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { BrowserRouter } from "react-router-dom";

const CreatePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleCreate = async (newRideshare) => {
    // 在此处发送请求到你的API以创建新的共乘，然后更新共乘列表
  };

  return (
    <>
      <BrowserRouter>
        <Navbar toggle={toggle} />
        <Createcarpool onCreate={handleCreate} />
      </BrowserRouter>
    </>
  );
};

export default CreatePage;
