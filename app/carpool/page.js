"use client";
import React, { useState } from "react";
import Carpool from "../components/Carpool";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
const CarpoolPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  // const [rideshareList] = useState([]); // 你应该从你的API获取共乘列表，并存储在此状态中
  // rideshares={rideshareList}

  const handleFilter = (filterName, filterValue) => {
    // 在此处发送请求到你的API以获取筛选后的共乘列表，然后更新共乘列表
    const res = axios.post("/api/searchpost", filterValue);
  };

  return (
    <>
      <BrowserRouter>
        <Navbar toggle={toggle} />
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Carpool onFilter={handleFilter} />
      </BrowserRouter>
    </>
  );
};

export default CarpoolPage;
